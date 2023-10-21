import './index.css';
import Partners from './components/Partners/Partners'
import Seller from './components/Seller/Seller';
import QrGenerator from './components/QrGenerator/QrGenerator';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='innerContainer'>
        <Routes>
          <Route path="/" element={<Seller />} />
          <Route path="/qr" element={<QrGenerator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
