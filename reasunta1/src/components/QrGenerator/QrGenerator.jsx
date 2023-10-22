import React from 'react'
import './style.scss'
import { useState } from 'react';
import QRCode from 'qrcode.react';
import WebSocket from '../WebSocket/WebSocket';
import { useLocation } from 'react-router-dom'

export default function QrGenerator() {
    const location = useLocation()
    const randomId = "REF" + Math.random().toString().substr(2, 8);
    let paymentInfo = location.state;
    let bankId = 'seller_bank';
    let sellerBank = 'SELLER BANK JSC';

    const [formData, setFormData] = useState({
        reference: randomId,
        accountNo: '10200000001',
        amount: paymentInfo.resultAmount,
        bankId: bankId,
        sellerBank: sellerBank,
        description: '',
        products: paymentInfo.products,
    });

    const [products, setProducts] = useState()
    console.log(location.state)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const generateJSON = () => {
        return JSON.stringify(formData);
    };

    const generateQRCode = () => {
        const jsonString = generateJSON();
        return <QRCode value={jsonString} size={250} />;
    };
    return (
        <div className='qrContainer'>
            <form className='formStyle'>
                <label className='labelStyle'>Amount:</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className='inputStyle'
                    disabled
                />

                <label className='labelStyle'>Bank ID:</label>
                <input
                    type="text"
                    name="bankId"
                    value={formData.bankId}
                    onChange={handleChange}
                    className='inputStyle'
                    disabled
                />

                <label className='labelStyle'>Seller Bank:</label>
                <input
                    type="text"
                    name="sellerBank"
                    value={formData.sellerBank}
                    onChange={handleChange}
                    className='inputStyle'
                    disabled
                />

                <label className='labelStyle'>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='inputStyle'
                />

                <label className='labelStyle'>Product list:</label>
                <ul className='productListBlock'>
                  {paymentInfo.products.map((item, index) => (
                    <li className='productList' key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
            </form>
            {generateQRCode()}
            <WebSocket reference={randomId} />
        </div>
    )
}
