import React, { useEffect, useState } from 'react'

const ItemSearch = () => {

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
    
  return (
    <>
     {noResults && (
        <p>There is nothing found for your request. Please change your check request.</p>
      )}
    <input 
    type='text' 
    className='searchItem'
    placeholder="Search"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    />  
    <label htmlFor='searchItem'></label>
    </>
  )
}

export default ItemSearch
