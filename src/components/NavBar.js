import React, { useContext } from 'react';
import { bookContext } from '../context/Bookcontext';


const NavBar = () => {

const { books } = useContext(bookContext)
 return (
    <div className='navbar'>
        <h1>MiReading List App</h1>
        <p>You have { books.length } books to go through </p>
    </div>
 )
};

export default NavBar;