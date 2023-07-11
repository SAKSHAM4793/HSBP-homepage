import React from 'react';
import "../PlateForm/plateForm.css";
import CardContent from './CardContent';
const PlateForm = () => {
  return (
    <div>
        <p className='text-p-1'>India's Largest Platform</p>
        <p className='text-p-2'>For all your beauty salon needs</p>

        <div className=' card-title'> 

           <CardContent/>
        </div>
    </div>
  )
}

export default PlateForm;