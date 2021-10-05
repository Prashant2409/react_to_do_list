import React, { useState } from 'react';
import List from './List';

const App = () => {

const [inputList,setInputList] = useState("");  
const [Items,setItems] = useState([]);  

const itemEvent = (event) => {
  setInputList(event.target.value);
}; 


const listOfItems = () => {
 setItems((oldItems) => {
   return[...oldItems,inputList];
 });
};

const deletItem = (id) => {
setItems((oldItems) => {
  return oldItems.filter((arrElem, index) => {
   return index !== id;
  });
});
};



return (
<>
<div className='main_div'>
<div className='center_div'>
<br/>
<h1>ToDo List</h1>
<br/>

<input id='itemtoadd' type='text' placeholder='Add item here' onChange={itemEvent}/>
<button onClick={listOfItems}>+</button>
  
<ol id='itemList'>
{/* <li> Buy  apple</li> */}
{
  Items.map((itemval,index) => {
   return <List 
      text = {itemval}
      key={index}
      id={index}
      onselect = {deletItem}
    />
  })
}

</ol>
  
</div>
</div>
</>
);
};

export default App;