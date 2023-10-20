import React from "react";
import { useState } from "react";

// type InputElProps = {
//     onAddItem: (item: string) => void; // Callback function to add items
//   };

const InputEl = ({ onAddItem }) => {
    const [item, setItem] = useState('');
 

    const handleSubmit= (e) => {
       e.preventDefault();
       if(item.trim() !== '') {
        setItem('')
        onAddItem(item);
       }
    }
    


  return (
  <>
  <form  onSubmit={handleSubmit}>
    <input 
    type='text' 
    className='newItem'
    placeholder="Add New Item"
    value={item}
    onChange={(e) => setItem(e.target.value)}
    /> 
    <label htmlFor='newItem'></label>
    <button type='submit' id='addItem'>ADD</button>
    </form>
  </>
  )
}

export default InputEl
