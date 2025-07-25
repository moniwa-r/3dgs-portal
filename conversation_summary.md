# 会話サマリー: 3DGS (sogs) データ表示機能の実装

このドキュメントは、3DGS (sogs) データをポータルサイトに表示するための会話とコード変更の記録です。

## 1. 初期分析と目標設定

- **目標**: 「sogs」で圧縮した3DGSデータをポータルサイトで表示する。
- **初期状態**: `App.js`は`iframe`を使用して`superspl.at`の外部ビューワーを埋め込んでいた。`meta.json`は3DGSモデルのデータ構造を定義していたが、直接利用されていなかった。

## 2. `@playcanvas/react`の導入

`iframe`による埋め込みではなく、よりモダンな`@playcanvas/react`ライブラリを直接組み込む方針に決定。

- **インストール**:
  ```bash
  npm install @playcanvas/react playcanvas
  ```

## 3. `SplatViewer.js`の作成と進化

3DGSデータを表示するための新しいReactコンポーネント`SplatViewer.js`を作成し、以下の課題に対応しながら改善を進めた。

### 3.1. 初期実装とエラー対応

- **`useSplat`フックの試み**: 当初、`useSplat`カスタムフックを実装したが、`@playcanvas/react`の`Canvas`コンポーネントや`playcanvas`の`Splat`クラスのインポートに関するエラーが発生。
- **エラー原因**:
    - `@playcanvas/react`には`Canvas`ではなく`Application`を使用する必要があった。
    - `playcanvas`の`Splat`クラスを直接インポートするのではなく、PlayCanvasアプリケーションの`assets`システムを通じてアセットをロードする必要があった。
    - `import *s pc`というタイプミスがあった。
- **修正**:
    - `App.js`で`Canvas`を`Application`に修正。
    - `SplatViewer.js`で`useSplat`を廃止し、`pc.Application.getApplication()`を使用してPlayCanvasアプリケーションインスタンスを取得し、`pc.Asset`と`app.assets.load()`でアセットをロードするように変更。
    - `import *s pc`を`import * as pc`に修正。

### 3.2. カメラ位置とモデルの向きの調整

- **問題**: モデルが拡大されすぎている、天地が逆になっている、スクロールでズームアウトできない。
- **原因**:
    - カメラの初期位置がモデルに近すぎた。
    - モデルの初期回転が正しくなかった。
    - `OrbitControls`のズーム範囲に制限があった。
    - `useState`で設定したカメラ位置が、`useEffect`内の動的計算で上書きされていた。
- **修正**:
    - モデルの天地逆転を修正するため、`rotation={[180, 0, 0]}`を`Entity name="model"`に適用。
    - `OrbitControls`の`distanceMax={Infinity}`を設定し、ズームアウト制限を解除。
    - `OrbitControls`の`distance`プロパティに`camPos.z`を明示的に設定することで、`useState`で設定したカメラのZ座標が初期位置として反映されるようにした。
    - `useEffect`内のカメラ位置の動的計算ロジックを削除し、`useState`の初期値を尊重するようにした。
    - `camPos`の初期値を`new pc.Vec3(0, 0, 70)`に設定し、適切な初期ズームレベルを確保。

### 3.3. 背景色の調整

- **問題**: 背景色が変更されない。
- **原因**: `Camera`コンポーネントの`clearColor`プロパティが`pc.Color`オブジェクトだけでなく、CSSのHEX文字列も受け付けるが、`pc.Color`オブジェクトでの指定が正しく反映されていなかった可能性。
- **修正**: `clearColor`をHEX文字列で指定するように変更し、最終的に元の色に戻した。

## 4. `App.js`の変更

- `iframe`を削除し、`@playcanvas/react`の`Application`コンポーネントで`SplatViewer`をラップするように変更。

## 5. 現在のコードスニペット

### `human/src/components/SplatViewer.js` (最終状態)

```javascript
import React, { useEffect, useState, useRef } from 'react';
import * as pc from 'playcanvas';
import { Entity } from '@playcanvas/react';
import { Camera, Light, GSplat } from '@playcanvas/react/components';
import { OrbitControls } from '@playcanvas/react/scripts';

const SplatViewer = ({ url }) => {
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [camPos, setCamPos] = useState(new pc.Vec3(0, 0, 70)); // Z=70を初期値として設定
  const [modelPos, setModelPos] = useState(new pc.Vec3(0, 0, 0));
  const appRef = useRef(null);

  useEffect(() => {
    if (!appRef.current) {
        appRef.current = pc.Application.getApplication();
    }
    const app = appRef.current;

    if (!app) {
      console.error("PlayCanvas App not found.");
      setError("PlayCanvas App not found.");
      setIsLoading(false);
      return;
    }

    const asset = new pc.Asset('model.sogs', 'gsplat', { url: url });

    asset.on('load', () => {
        setModel(asset);
        setIsLoading(false);

        // モデルの中心を計算して設定（これは維持）
        const aabb = asset.resource.aabb;
        const center = aabb.center;
        setModelPos(center.clone().mulScalar(-1));

        // カメラ位置の動的計算は削除し、useStateの初期値を尊重する
    });

    asset.on('error', (err) => {
        console.error('Error loading splat model:', err);
        setError(err);
        setIsLoading(false);
    });

    app.assets.add(asset);
    app.assets.load(asset);

    return () => {
        if (asset) {
            app.assets.remove(asset);
            asset.unload();
        }
    };
  }, [url]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !model) return <div>Error loading model.</div>;

  return (
    <>
      <Entity name="light" rotation={[45, 45, 0]}>
        <Light type="directional" color={pc.Color.WHITE} />
      </Entity>
      <Entity name="camera" position={camPos}>
        <Camera clearColor={new pc.Color(40/255, 44/255, 52/255)} />
        <OrbitControls distance={camPos.z} distanceMax={Infinity} distanceMin={0.5} />
      </Entity>
      <Entity name="model" position={modelPos} rotation={[180, 0, 0]}>
        <GSplat asset={model} />
      </Entity>
    </>
  );
};

export default SplatViewer;
```

### `human/src/App.js` (関連部分の最終状態)

```javascript
// ... (他のインポート)
import { Application } from '@playcanvas/react';
import SplatViewer from './components/SplatViewer';
// ... (他のコード)

        {/* Iframe Samples Section */}
        <section id="iframe-samples" className="section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">3D Samples</h2>
            </Fade>
            <Row className="mb-5">
              <Col md={12}>
                <div style={{ height: '70vh' }}>
                  <Application>
                    <SplatViewer url={process.env.PUBLIC_URL + "/test/meta.json"} />
                  </Application>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

// ... (残りのコード)
```
