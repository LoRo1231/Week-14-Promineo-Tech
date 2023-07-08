import React from 'react';

function Navbar(){

    return(
        <div>
            <div className= 'row'>
                <span className='bg-dark p-4'>
                    <a href='#' className='Navbar-link'> Now Playing</a> 
                    <a href='#' className='Navbar-link'> Locations </a>
                    <a href='#' className='Navbar-link'> FAQ </a>
                    <h3 className='text-center text-white'> MOVIE SITE </h3>
                </span>
            </div>
        </div>
    );
}

export default Navbar;