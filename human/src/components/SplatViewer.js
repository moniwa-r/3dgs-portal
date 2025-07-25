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
        <OrbitControls distance={camPos.z} distanceMax={Infinity} distanceMin={0.5} /> {/* ズームアウト制限を解除 */}
      </Entity>
      <Entity name="model" position={modelPos} rotation={[180, 0, 0]}>
        <GSplat asset={model} />
      </Entity>
    </>
  );
};

export default SplatViewer;