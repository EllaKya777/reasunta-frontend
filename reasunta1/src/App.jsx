import './index.css';
import QRCode from 'qrcode.react';
import { useState } from 'react';
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '5px 0',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  return (
    <div className="App">
      <div>
        <WebSocket reference={randomId}/>
        <form style={formStyle}>
          <label style={labelStyle}>Account No:</label>
          <input
              type="text"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              style={inputStyle}
          />

          <label style={labelStyle}>Amount:</label>
          <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              style={inputStyle}
          />

          <label style={labelStyle}>Bank ID:</label>
          <input
              type="text"
              name="bankId"
              value={formData.bankId}
              onChange={handleChange}
              style={inputStyle}
          />

          <label style={labelStyle}>Seller Bank:</label>
          <input
              type="text"
              name="sellerBank"
              value={formData.sellerBank}
              onChange={handleChange}
              style={inputStyle}
          />

          <label style={labelStyle}>Description:</label>
          <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={inputStyle}
          />
        </form>

        {generateQRCode()}
      </div>
    </div>
  );
}

export default App;
