import React from 'react';
import { Container, Row, Col, Button, Card, Form, Navbar, Nav, Accordion } from 'react-bootstrap';
import { FaUserCheck, FaBolt, FaCamera, FaCalendarAlt, FaDownload, FaSave, FaShareAlt, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Fixed Header */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Asolab. 3DGS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#service">Features</Nav.Link>
              <Nav.Link href="#how-to-use">Flow</Nav.Link>
              <Nav.Link href="#iframe-samples">3D Samples</Nav.Link>
              <Nav.Link href="#video-sample">Video Sample</Nav.Link>
              <Nav.Link href="#use-cases">Use Cases</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
              <Nav.Link href="#pricing">Price</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <header className="App-header text-white text-center">
        <Container>
          <Fade direction="down" triggerOnce>
            <h1>Human 3DGS Service</h1>
            <p className="lead">未来のあなたを、その手に。最高の3Dリアリティを体験せよ。</p>
            <Button href="#contact" variant="primary" size="lg" className="m-2">今すぐ予約する</Button>
          </Fade>
        </Container>
      </header>

      {/* Main Content */}
      <main>
        {/* Service Section */}
        <section id="service" className="section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Our Features</h2>
            </Fade>
            <Row className="justify-content-center">
              <Col md={4} className="text-center mb-4">
                <Slide direction="left" triggerOnce>
                  <FaUserCheck size={60} className="mb-3 text-primary" />
                  <h3>超高精細</h3>
                  <p>専用スタジオと最新鋭機材で、毛穴や衣服の質感まで忠実に再現します。</p>
                </Slide>
              </Col>
              <Col md={4} className="text-center mb-4">
                <Fade delay={200} triggerOnce>
                  <FaBolt size={60} className="mb-3 text-primary" />
                  <h3>高速処理</h3>
                  <p>撮影にかかる時間は10分以内！お渡しも数営業日内に行えます。</p>
                </Fade>
              </Col>
              <Col md={4} className="text-center mb-4">
                <Slide direction="right" triggerOnce>
                  <FaCamera size={60} className="mb-3 text-primary" />
                  <h3>プロによる撮影</h3>
                  <p>専門スタッフが最適なポージングやライティングをサポートします。</p>
                </Slide>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="bg-dark section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Flow</h2>
            </Fade>
            <Row className="justify-content-center">
              <Col md={8} className="mb-5 text-center">
                <Slide direction="left" triggerOnce>
                  <FaCalendarAlt size={60} className="mb-3 text-primary" />
                  <h4>STEP 1: ご予約</h4>
                  <p>WEBフォームからご希望の日時をご予約ください。専門スタッフが丁寧に対応いたします。</p>
                </Slide>
              </Col>
              <Col md={8} className="mb-5 text-center">
                <Fade delay={200} triggerOnce>
                  <FaCamera size={60} className="mb-3 text-primary" />
                  <h4>STEP 2: スタジオ撮影</h4>
                  <p>ご予約いただいた日時にスタジオへお越しください。プロの機材と技術で全身を撮影します。</p>
                </Fade>
              </Col>
              <Col md={8} className="mb-5 text-center">
                <Slide direction="right" triggerOnce>
                  <FaDownload size={60} className="mb-3 text-primary" />
                  <h4>STEP 3: データ納品</h4>
                  <p>撮影後、数営業日以内に高精細な3DGSモデルデータをダウンロード形式で納品いたします。</p>
                </Slide>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Iframe Samples Section */}
        <section id="iframe-samples" className="section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">3D Samples</h2>
            </Fade>
            <Row className="mb-5">
              <Col md={4}>
                <Fade delay={0} triggerOnce>
                  <iframe title="sample1" id="viewer1" width="100%" height="300" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=5278dc8a"></iframe>
                </Fade>
              </Col>
              <Col md={4}>
                <Fade delay={200} triggerOnce>
                  <iframe title="sample2" id="viewer2" width="100%" height="300" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=c2ec7706"></iframe>
                </Fade>
              </Col>
              <Col md={4}>
                <Fade delay={400} triggerOnce>
                  <iframe title="sample3" id="viewer3" width="100%" height="300" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=f86e4816"></iframe>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Video Sample Section */}
        <section id="video-sample" className="bg-dark section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Video Sample</h2>
            </Fade>
            <p className="text-center mb-4">3DGSモデルから動画を生成することも可能です。オプションとして承ります。</p>
            <Row className="justify-content-center">
              <Col md={8}>
                <Fade triggerOnce>
                  <video src={process.env.PUBLIC_URL + "/videos/3dgs.mp4"} width="100%" controls autoPlay muted loop playsInline />
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Use Cases</h2>
            </Fade>
            <Row className="justify-content-center">
              <Col md={6} className="mb-4">
                <Slide direction="left" triggerOnce>
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <FaSave size={50} className="mb-3 text-primary" />
                      <Card.Title>全身のデジタル保存</Card.Title>
                      <Card.Text>
                        成長記録、記念、または特定の時期の姿をデジタルデータとして高精細に保存できます。未来の自分へのタイムカプセルとして。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Slide>
              </Col>
              <Col md={6} className="mb-4">
                <Slide direction="right" triggerOnce>
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <FaShareAlt size={50} className="mb-3 text-primary" />
                      <Card.Title>SNSでの新しい自己表現</Card.Title>
                      <Card.Text>
                        あなたの3DGSモデルをSNSでシェアし、フォロワーを驚かせましょう。静止画や動画では伝えきれない魅力を発信できます。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Slide>
              </Col>
              <Col md={6} className="mb-4">
                <Slide direction="left" delay={200} triggerOnce>
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <FaGlobe size={50} className="mb-3 text-primary" />
                      <Card.Title>ウェブサイト・ブログでの活用</Card.Title>
                      <Card.Text>
                        個人サイトやブログに3DGSモデルを埋め込み、訪問者にインタラクティブな体験を提供できます。ポートフォリオや自己紹介に最適です。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Slide>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Location Section */}
        <section id="location" className="bg-dark section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Our Studio Location</h2>
            </Fade>
            <Row className="justify-content-center align-items-center">
              <Col md={6} className="mb-4 text-center">
                <Slide direction="left" triggerOnce>
                  <FaMapMarkerAlt size={80} className="mb-3 text-primary" />
                  <h3>長野県松本市平田東２丁目１４−５</h3>
                  <p className="lead">松本市総合体育館近く、アクセスしやすい立地です。</p>
                  <p>駐車場も完備しておりますので、お車でお越しいただけます。</p>
                </Slide>
              </Col>
              <Col md={6} className="mb-4">
                <Slide direction="right" triggerOnce>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.972018206789!2d137.9654659!3d36.19359659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d0f28029fbbb9%3A0xc1af3ce4048c2d8d!2z44K544Kr44Kk44OV44Kh44Kk44OI5p2-5pys!5e1!3m2!1sja!2sjp!4v1752538850598!5m2!1sja!2sjp"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Studio Location Map"
                    ></iframe>
                  </div>
                </Slide>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section">
          <Container className="text-center">
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Campaign Price</h2>
            </Fade>
            <Slide direction="up" triggerOnce>
              <Card style={{ maxWidth: '400px', margin: 'auto' }}>
                <Card.Header as="h3">お試しプラン</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">¥1,000</Card.Title>
                  <Card.Text>
                    期間限定の特別価格。全身の3DGSモデル作成を体験いただけます。
                  </Card.Text>
                  <Button href="#contact" variant="primary" size="lg">今すぐ予約する</Button>
                </Card.Body>
              </Card>
            </Slide>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-dark section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">FAQ</h2>
            </Fade>
            <Accordion defaultActiveKey="0">
              <Fade cascade triggerOnce>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>撮影時間はどのくらいですか？</Accordion.Header>
                  <Accordion.Body>
                    撮影自体は10分程度で完了します。
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>データはいつ納品されますか？</Accordion.Header>
                  <Accordion.Body>
                    撮影後、数営業日以内にダウンロード形式で納品いたします。
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>どのようなデータ形式で納品されますか？</Accordion.Header>
                  <Accordion.Body>
                    3DGSの標準形式である.ply、またはウェブビューワー形式で納品いたします。
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>商用利用は可能ですか？</Accordion.Header>
                  <Accordion.Body>
                    はい、商用利用も可能です。詳細はお問い合わせください。
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>
            </Accordion>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <Container>
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Contact & Reservation</h2>
            </Fade>
            <Row className="justify-content-center">
              <Col md={8}>
                <Slide direction="up" triggerOnce>
                  <p className="text-center mb-4">ご予約、その他お問い合わせは以下のフォームからご連絡ください。</p>
                  <Form action="https://formspree.io/f/mrblzlkn" method="POST">
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>お名前</Form.Label>
                      <Form.Control type="text" name="name" placeholder="氏名" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>メールアドレス</Form.Label>
                      <Form.Control type="email" name="_replyto" placeholder="メールアドレス" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                      <Form.Label>ご希望の日時</Form.Label>
                      <Form.Control type="datetime-local" name="datetime" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>メッセージ</Form.Label>
                      <Form.Control as="textarea" name="message" rows={5} placeholder="ご質問・ご要望など" required />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" size="lg">
                        送信
                      </Button>
                    </div>
                  </Form>
                </Slide>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-4">
        <Container>
          <p>&copy; 2025 株式会社ASOLAB. Human 3DGS Service. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;