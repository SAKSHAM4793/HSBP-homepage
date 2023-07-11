import React from 'react';
import "./nav.css";


const NavBar = () => {
  return (  
    <>
    <div className='header'>
        <nav>
            <div className='div-left'>
                <ul className='nav-list-L'>
                    <img className='img-1' src='https://media.discordapp.net/attachments/1121751668304920610/1123573111976108133/Group_7.png' alt='Img' />
                    <img className='img-2' src='https://media.discordapp.net/attachments/1121751668304920610/1123573112198418472/Group_37.png' alt='IMG' />
                </ul>
            </div>
            <div className='div-right'>
                <ul className='nav-list-R'>
                    <li className='text-r1 text-r'>Download App</li>
                    <li><img className='text-r1 text-r' src='https://media.discordapp.net/attachments/1121751668304920610/1123573203219005521/Layer_58.png'/></li>
                    <li><img className='text-r3' src='https://media.discordapp.net/attachments/1121751668304920610/1123573113909674095/Icon_zocial-cart.png'/></li>
                    <li className='text-r1 text-r'>Login</li>
                </ul>
            </div>

        </nav>
    </div>
</>
  )
}

export default NavBar;