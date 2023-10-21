import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


const InputEl = ({ onAddItem }) => {

    const dataItems = ['t-short', 'pan', 'mag']
    const [items, setItems] = useState(dataItems);   
    const [noResults, setNoResults] = useState(false);

    const [searchItem, setSearchItem] =useState('')

    const position = useRef(0);
    const button = useRef(null);

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
    
// const buttonMove = ()=> {
//   position.current =position.current + 1
//   if (position.current > 400){
//   button.current.style.display='none'
//   }
//   button.current.style.left = position.current + 'px'
// }

// const buttonAnim = () => {
//   const intervalId = setInterval(buttonMove, 200); 
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, 200);
// };


// const buttonMove = () => {
//   const moveInterval = 200; // Adjust this value to control the speed of movement
//   let moveAmount = 1;

//   const move = () => {
//     position.current += moveAmount;
//     button.current.style.left = position.current + 'px';

//     if (position.current >= 400) {
//       button.current.style.display = 'none';
//       return;
//     }

//     setTimeout(move, moveInterval);
//   };

//   move();
// };


  return (
  <>
  {noResults && (
        <p>There is nothing found for your request. Please change your check request.</p>
      )}
  <form  onSubmit={handleSubmit} >
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

// {!noResults && (searchItem.length !==0) &&(<button type='submit' id='addItem' onClick={()=>buttonMove()}   ref={button} >ADD</button>)}