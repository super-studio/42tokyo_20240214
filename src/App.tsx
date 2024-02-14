// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';
import InstagramStats from './components/InstagramStats'; // 新しいページコンポーネントをインポート
import CreatorInfo from './components/CreatorInfo'; // コンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLine } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <Router>
      <div>
        <nav style={{ borderBottom: '1px solid', marginBottom: '20px', paddingBottom: '10px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link> | <Link to="/instagram-stats">インスタの統計</Link>

        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Products />
              <CreatorInfo
                name="[監修] 鳥羽 周作"
                bio="ニューワールドのオーナーシェフ. sio株式会社 / シズる株式会社 総料理責任者。"
                imageUrl="https://github.com/kknowk/kknowk/assets/131352588/2a5f6c0f-e6dc-4d58-9dca-fbda5d33cfe6"
              />
              <div style={{ marginTop: '20px', textAlign: 'center', border: '1px solid', padding: '20px', fontSize: '1.2em' }}>
                <p style={{ fontSize: '2em', marginBottom: '20px' }}>公式SNS</p>
                <a href="https://www.instagram.com/futsunoshop/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com/futsunoshop" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://futsuno.shop/shop/pages/line_campaign" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <FontAwesomeIcon icon={faLine} size="2x" />
                </a>
              </div>
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/instagram-stats" element={<InstagramStats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
