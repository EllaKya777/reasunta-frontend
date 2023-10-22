import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './style.scss'
import { FaMugHot, FaTshirt, FaShoppingBag, FaCalendarAlt, FaPen } from 'react-icons/fa';
import { Link } from "react-router-dom"
import QrGenerator from "../QrGenerator/QrGenerator";

const InputEl = ({ onAddItem }) => {

  const dataItems = [
    { id: 1, name: 'Shirt', price: 300 },
    { id: 2, name: 'Pen', price: 1 },
    { id: 3, name: 'Mug', price: 95 },
    { id: 4, name: 'Shopping bag', price: 900 },
    { id: 5, name: 'Calendar', price: 2 }
  ];

  const [items, setItems] = useState(dataItems);
  const [noResults, setNoResults] = useState(false);

  const [searchItem, setSearchItem] = useState('')
  const [paymentInfo, setPaymentInfo] = useState({ resultAmount: 0, products: [] })

  useEffect(() => {
    let filteredItems = dataItems.filter(data => data.name);

    console.log("filtered", filteredItems);

    if (searchItem !== "") {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase() === searchItem.toLowerCase()
      );
    }

    setItems(filteredItems);
    setNoResults(filteredItems.length === 0);
  }, [searchItem]);

  const findElementById = (id) => {
    return dataItems.find(data => data.id == id).price + " EUR"
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.trim() !== '') {
      setSearchItem('')
      onAddItem(searchItem);
    }

    let item = dataItems.find(data => data.name === searchItem);

    setPaymentInfo({
        resultAmount: paymentInfo.resultAmount + item.price,
        products: paymentInfo.products.concat(item.name)
    });
  }

  console.log(paymentInfo)

  return (
    <>
      <div className="elementContainer">
        <div className='listItem' onClick={(e) => setSearchItem('Mug')}><FaMugHot /> Mug, Price: {findElementById(3)} </div>
        <div className='listItem' onClick={(e) => setSearchItem('Shirt')}><FaTshirt /> Shirt, Price: {findElementById(1)}</div>
        <div className='listItem' onClick={(e) => setSearchItem('Shopping bag')}><FaShoppingBag /> Shopping bag, Price: {findElementById(4)} </div>
        <div className='listItem' onClick={(e) => setSearchItem('Calendar')}><FaCalendarAlt /> Calendar, Price: {findElementById(5)}</div>
        <div className='listItem' onClick={(e) => setSearchItem('Pen')}><FaPen /> Pen, Price: {findElementById(2)}</div>
      </div>
      {noResults && (
        <p>There is nothing found for your request. Please change your check request.</p>
      )}
      <form onSubmit={handleSubmit} >
        <input
          type='text'
          className='newItem'
          placeholder="Add New Item"
          style={{ marginTop: '2rem' }}
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <label htmlFor='newItem'></label>
        {!noResults && (searchItem.length !== 0) && (<button style={{ marginTop: '1rem' }} type='submit' id='addItem'>ADD</button>)}
        {paymentInfo.resultAmount !== 0 && <Link to='/qr' state={paymentInfo} className="nextBtn">Next</Link>}
      </form>

      
    </>
  )
}

export default InputEl
