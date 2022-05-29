import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar';
import BannerImage from '../assets/Todowall2.jpg';
import '../styles/Home.css';

function Header() {
  return (
    <div>
    <NavBar/> 
    <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer' >
        
    <h1>Todo List</h1>
                <p>Pl click Todo Button on the Top</p>
    </div>

</div></div>
  )
}

export default Header