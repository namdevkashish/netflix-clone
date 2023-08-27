import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className='showcase'>
        <div className='showcase-top'>
            <img src='https://i.ibb.co/r5krrdz/logo.png' alt='logo' />
            <Link to='/' className='btn btn-rounded'>
            <b>Sign In</b>
            </Link>
        </div>
        <div className='showcase-content'>
            <p>Welcome back!</p>
            <h1><b>Enjoy big movies, hit series and more from ₹ 149.</b></h1>
            <p>Join today. Cancel anytime.</p>
            <Link to='/netflix-show' className='btn-header btn-xl'>
                <b>Watch Free For 30 Days</b>
                <i className='fas fa-chevron-right btn-icon'></i>
            </Link>
        </div>
    </header>
  )
}

export default Header