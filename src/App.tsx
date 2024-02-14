// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';
import ProductsPostsCount from './components/ProductsPostsCount'; // ここでインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLine } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <Router>
      <div>
        <nav style={{ borderBottom: '1px solid', marginBottom: '20px', paddingBottom: '10px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Products />
              <ProductsPostsCount /> 
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
