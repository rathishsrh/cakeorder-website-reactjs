import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { BsFillCake2Fill } from "react-icons/bs";
import { BsFillSearchHeartFill } from "react-icons/bs";

export const Header = () => {
    const [open, setOpen] = useState(false);
    function handleClick(){
        setOpen(!open);
    }

  return (<>
    <div className='header'>
        <div className="leftheader">
            <img src="https://img.freepik.com/free-psd/delicious-chocolate-birthday-cake-with-candles_632498-24980.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
        <div className="rightheader">
            <div className="search-box">
                <BsFillCake2Fill className="cake-icon" />
                <input type="text" name="search" placeholder="Cakes"/>
                <BsFillSearchHeartFill className='search-icon'/>
            </div>
            <div className='menu' onClick={handleClick}><TiThMenu /></div>
        </div>
    </div>




    {/* // Sidebar */}
      <div className={`sidebar ${open?"open":""}`}>
        <ul>
          <li>Home</li>
          <li>Cakes</li>
          <li>Orders</li>
          <li>Contact</li>
        </ul>
      </div>



</>  )
}
