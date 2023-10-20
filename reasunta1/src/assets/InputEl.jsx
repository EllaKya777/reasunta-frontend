import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// type InputElProps = {
//     onAddItem: (item: string) => void; // Callback function to add items
//   };

const InputEl = ({ onAddItem }) => {
   // const [item, setItem] = useState('');

    const dataItems = ['t-short', 'pan', 'mag']
    const [items, setItems] = useState(dataItems);   
    const [noResults, setNoResults] = useState(false);

    const [searchItem, setSearchItem] =useState('')

    useEffect(() => {
        let filteredItems = dataItems;
      
        if (searchItem !== "") {
          filteredItems = filteredItems.filter((item) =>
            item.toLowerCase().includes(searchItem.toLowerCase())
          );
        }
      
        setItems(filteredItems);
        setNoResults(filteredItems.length === 0);
      }, [searchItem]);
    
 

    const handleSubmit= (e) => {
       e.preventDefault();
       if(searchItem.trim() !== '') {
        setSearchItem('')
        onAddItem(searchItem);
       }
    }
    


  return (
  <>
  {noResults && (
        <p>There is nothing found for your request. Please change your check request.</p>
      )}
  <form  onSubmit={handleSubmit}>
    <input 
    type='text' 
    className='newItem'
    placeholder="Add New Item"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    /> 
    <label htmlFor='newItem'></label>
    {!noResults && (searchItem.length !==0) &&(<button type='submit' id='addItem'>ADD</button>)}
    </form>
  </>
  )
}

export default InputEl
