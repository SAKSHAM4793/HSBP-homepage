import React from 'react';
import "../HeroSection/hero.css";
// import Image1 from '../HeroSection/image/Group 1956.png';
import PlateForm from '../../PlateForm/PlateForm'
import BeautyServices from '../Beautys/Beautys'
// import NearbyS from '../NearBy-Saloon/NearbyS';
import Card4 from '../ProductShop/Card4';
import Franchies from '../Franchies/Franchies';

const Hero = () => {

     
  return (<>
    <div className='hero-section' > 
    <div className='text'> 
    <p className='text-1'>Expert</p>
    <p className='text-2'>Beautician</p>
    <p className='text-3'>Now serving at your Home</p>
    <p className='text-4'>BEAUTICIANS / HAIRDRESSERS</p>
    <button className='Button'>Book Now</button>
    </div>
 
    
    </div>
    <PlateForm/>
    <BeautyServices/>

    <Card4/>
    <Franchies/>
    {/* <NearbyS/> */}
    </>
  )
}

export default Hero;