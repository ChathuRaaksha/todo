import React,{useState} from 'react'
import Logo from '../assets/todo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbarr.css';

function NavBar() {
    const [openLinks,setopenLinks]=useState(false);
const toggleNavBar=()=>{
    setopenLinks(!openLinks);
};






  
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open':'close'}>
            <img src={Logo}  />
            <div className='hiddenLinks'>
         
            <Link to="/todo">Todo</Link>
            <Link to="/login">Logout</Link>
            </div>
        </div>
        <div className='rightSide'>
       
            <Link to="/todo">Todo</Link>
            <Link to="/">Logout</Link>
             <button onClick={toggleNavBar}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default NavBar