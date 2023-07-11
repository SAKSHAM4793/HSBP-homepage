import React from 'react'
import "../Beautys/beauty.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Card1 from './Card1'
import Card2 from './Card2'
// import NearbyS from '../NearBy-Saloon/NearbyS'

const BeautyServices = () => {
    return (
        <div>
            <div>
                <p className='text-b-1'>Beauty Services</p>
                <p className='text-b-2'>We provide special offers for students and corporates</p>
                <p className='text-b-3'>Explore All<span className='icons'><BsFillArrowRightCircleFill /></span></p>
            </div>

            <div>
                <Card1 />
                 
            </div><br/>

            <div className='appointment'>
                <div className='appointment-text'>
                    <h1 className='a-text-1'>Book Appointment</h1>
                    <p className='a-text-2'>Lorem ipsum dolor sit amet, consectetur adipisci elitsed eiusmod</p>
                </div>
                <div className='appointment-contact' >
                    <div className='appointment-contact-1'>
                        <h1 className='a-c-text1'>Book Appointment</h1>
                        <p className='a-c-text2'>We are happy to serve</p>
                         
                        <p className='a-c-text3'>Our Services : +91-7835-011-011</p>
                        <button className='a-c-button'>Contact Us</button>
                    </div>
                </div>
<div className='beauty-packages'>
    
<h1  className='b-p-text1'>Beauty Packages</h1>
<p lassName='b-p-text2'>We Provide Special Offer For students and Corporates</p>
<Card2/>
<p className='text-b-4'>See All Packages</p>
{/* <NearbyS/> */}
<div>
    
</div>


</div>
            </div>   
        </div>
    )
}

export default BeautyServices;