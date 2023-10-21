import './index.css';
import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import WebSocket from './assets/webSocket';
import Partners from './assets/Partners'
import MainSeller from './components/MainSeller';

function App() {


  const randomId = "REF" + Math.random().toString().substr(2, 8);

  const [formData, setFormData] = useState({
    reference: randomId,
    accountNo: '',
    amount: '',
    bankId: '',
    sellerBank: '',
    description: '',
    resultType: 'APPROVED',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const generateJSON = () => {
    return JSON.stringify(formData);
  };

  const generateQRCode = () => {
    const jsonString = generateJSON();
    return <QRCode value={jsonString} size={200} />;
  };

  return (
    <div className="App">
      <div>
        <WebSocket reference={randomId} />
        <Partners />
        <MainSeller />
        <form>
          <br />
          <label>Account No:</label>
          <input type="text" name="accountNo" value={formData.accountNo} onChange={handleChange} />
          <br />
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
          <br />
          <label>Bank ID:</label>
          <input type="text" name="bankId" value={formData.bankId} onChange={handleChange} />
          <br />
          <label>Seller Bank:</label>
          <input type="text" name="sellerBank" value={formData.sellerBank} onChange={handleChange} />
          <br />
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
          <br />
          <button onClick={generateQRCode}>Generate QR Code</button>
        </form>

        {generateQRCode()}
      </div>
    </div>
  );
}

export default App;