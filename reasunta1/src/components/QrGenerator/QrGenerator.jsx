import React from 'react'
import './style.scss'
import { useState } from 'react';
import QRCode from 'qrcode.react';
import WebSocket from '../WebSocket/WebSocket';
import { useLocation } from 'react-router-dom'

export default function QrGenerator() {
    const location = useLocation()
    const randomId = "REF" + Math.random().toString().substr(2, 8);
    let amount = location.state;

    const [formData, setFormData] = useState({
        reference: randomId,
        accountNo: '',
        amount: amount,
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
        <div className='qrContainer'>
            <form className='formStyle'>
                <label className='labelStyle'>Account No:</label>
                <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className='inputStyle'
                />

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
                />

                <label className='labelStyle'>Seller Bank:</label>
                <input
                    type="text"
                    name="sellerBank"
                    value={formData.sellerBank}
                    onChange={handleChange}
                    className='inputStyle'
                />

                <label className='labelStyle'>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='inputStyle'
                />
            </form>
            {generateQRCode()}
            <WebSocket reference={randomId} />
        </div>
    )
}
