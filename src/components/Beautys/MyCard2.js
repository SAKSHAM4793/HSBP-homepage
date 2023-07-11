import React from 'react';
import {BiRupee} from "react-icons/bi"


const MyCard2 = (props) => {
  return (
    <div className='myCard-1'>
     
        <img  className='my-card-img-1'  src={props.Image2} alt='Image-G'/>
        <h1 className='my-card-product-2'>Normal Packages</h1>
        <p className='my-card-product-1'>Lotus Cleanup</p>
        <p className='my-card-product-1'>Full Arms (chocolate Wax)</p>
        <p className='my-card-product-1'>Full Legs (chocolate Wax)</p>
        <p className='my-card-product-1'>VLCC Datan Pedicure</p>
        <p className='my-card-product-1'>Eyebrow</p>
        <p className='my-card-product-1'>Upper Lip</p><br/>
        <p className='my-card-product-1'><BiRupee/>1500    <del><BiRupee/>2000</del></p>
        <p className='my-card-product-1'>50% OFF</p>
        

        <button className='my-card-button'>Know More</button>

        
   
         
    </div>
  )
}

export default MyCard2;