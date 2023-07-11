import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import{FaLocationDot} from 'react-icons/fa6';
import '../NearBy-Saloon/Nearby.css';
import Card3 from './Card3/Card3';

const NearbyS = () => {
  return (
    <div className='box-1'>
        <h1 className='box-text-1' >Near By Salon</h1>
        <p className='box-text-2'>200+ tech enable Salon</p>
        <p className='box-text-3'>Discover the best Salon near You</p>
      <div  className='Search-box'>
      <div className='Search-box-1'>
        <i><FaLocationDot/></i>
         <input type='text'/>
        </div>

        <div className='Search-box-2'>
        <i><AiOutlineSearch/></i>
         <input type='text'/>
        </div>
        </div>
        
         <Card3/>
         <p className='text-b-3'>See All Salon</p>
                
         <div className='Franchies'>

         </div>
    </div>
  )
}

export default NearbyS;