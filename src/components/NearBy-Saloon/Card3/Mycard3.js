import React from 'react'
// import Card4 from '../../ProductShop/Card4';
// import Card3 from './Card3';

const Mycard3 = props => {
  return (<>
    <div className='myCard3-1'>
     
    <img  className='my-card-img3-1'  src={props.Image2} alt='Image-G'/>
    <h1 className='my-card-product3-1'>{props.product1}</h1>
    <p className='my-card-product3-1'>{props.des-1}</p>
    <p className='my-card-product3-1'>{props.des-2}</p>
   

    

     
</div>
{/* <div>
<Card3/>
<Card4/>
</div> */}
</>
  )
}



export default Mycard3;