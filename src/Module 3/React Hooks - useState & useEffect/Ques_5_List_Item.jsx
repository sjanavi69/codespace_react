// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

import React ,{ useState } from "react";

// Steps:
//     - Write your code within the file, by the name of component as List_Item
function List_Item(){
    const [item,setItem] = useState('');
    const [items,setItems] = useState([]);
    const handlechange = (event) => {
       setItem(event.target.value);
    }
    const handleadd =() => {
        if(item.trim()!==''){
            setItems([...items,item]);
            setItem('');
        }
    }
    return (
        <div>
            <input type="text"
            placeholder="enter an item"
            value={item}
            onChange={handlechange} />
            <button onClick={handleadd} > add</button>

            <ul>
                {items.map((itm,index) => (
                    <li key={index}>{itm}</li>
                

                ))}
            </ul>
        </div>
    )
    
}