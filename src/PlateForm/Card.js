import React from 'react';
import "../PlateForm/plateForm.css";
import { IoIosArrowDown } from "react-icons/io"
// import ReactDOM from 'react-dom';

function Card({ background,Image }) {
 
  return (<>

    <div className="cards "style={{ background}} >
  
      <div className="card_info "   >
      
        <span className="card_category " >Salon at Home</span>
        <h3 className="card_title">100+ Services</h3>
        <span><IoIosArrowDown /></span>
        <div className="card">
          <img src={Image} alt="myPic" className="card_img" />
        </div>
      </div>
      </div>
  </>);
}
 
export default Card;