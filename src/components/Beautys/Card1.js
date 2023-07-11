import React from  'react';
import "../Beautys/beauty.css"
import Mycard from './Mycard';
 
function Card1(props){
   let box=document.querySelector(".b-product-container");

    const btnpressprev= () =>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft- width;
    }
    
    const btnpressnext=  ()  =>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }
    return(
    <div className='B-product-carousel'>
<button className='pre-btn'  onClick={btnpressprev}><p>&lt;</p></button>
<button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>
<div className='b-product-container'>
    <Mycard 
    Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers for "
    description2=" students and corporates"
    />
    <Mycard  Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers for "
    description2="  students and corporates"
    
    />
    <Mycard
      Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers for"
    description2="  students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers for"
    description2="  students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers "
    description2="for students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers "
    description2="for students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers "
    description2="for students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers "
    description2="for students and corporates"
    />
    <Mycard 
     Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers "
    description2="for students and corporates"
    />
    <Mycard  
    Image1="https://media.discordapp.net/attachments/1121751668304920610/1122065007841136700/Mask_Group_87.png"
    product="Body Care"
    description="We provide special offers for "
    description2=" students and corporates"
    />

</div>

    </div>
   );
  }

export default Card1 ;