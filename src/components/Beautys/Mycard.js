import React from 'react';

const Mycard = (props) => {
  return (
    
    <div className='mycard'>
       
    <div>
        <img  className='my-card-img' src={props.Image1} alt="Image-beauty"/>
        <h1 className='my-card-product'>{props.product}</h1>
        <p className='my-card-description'>{props.description}</p>
        <p className='my-card-description my-card-description-1'>{props.description2}</p>

        <button className='my-card-button'>Know More</button>
    </div>
    </div>
  )
}

export default Mycard;