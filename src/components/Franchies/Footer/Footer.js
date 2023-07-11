import React from 'react'
import '../Footer/footer.css';
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import {RiSecurePaymentLine} from "react-icons/ri"

const Footer = () => {
  return (<>
    <div className='Footer'>
      <div className='Footer-1'>
        <div className='Footer-a-1'>
          <img src="https://media.discordapp.net/attachments/1121751668304920610/1123573112198418472/Group_37.png" alt='HBPC'/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>


        </div>

        <div className='Footer-a-2'>
          <p>About Us</p>
          <p>Nearby Salons</p>
          <p>Franchies</p>
          <p>Salon at Home</p>
          <p>Beauty  Product</p>
          <p>Institute</p>
          <p>Contact Us</p>
          <p> Blog</p>

        </div>

        <div className='Footer-a-3'>
          <p> Appointment Query</p>
          <p> I am a Beautician</p>
          <p>Site Map</p>
          <p>Apps Download</p>
          <p>Award</p>
          <p>News ,Event & Media</p>
          <p>Buy Subscription</p>
          <p>Cliny's Speak</p>
        </div>

        <div className='Footer-a-4'>
          <p>Customer care</p>
          <h3>+91 9582577510</h3>
          <h3>hsbpncr@gmail.com</h3>
          <p>CONNECT US</p>
          <p className='f-icons'><BsFacebook />  <BsInstagram />  <AiFillTwitterCircle />  <AiFillLinkedin /> </p>
        </div>
      </div>
      <hr />
      <div className='state-name'>
        <p>Noida | Delhi | Gurugram | Faridabd | Chandighar | Noida | Delhi | Gurugram | Faridabd | Chandighar | Noida | Delhi | Gurugram |</p>
        <p>Noida | Delhi | Gurugram | Faridabd | Chandighar | Noida | Delhi | Gurugram | Faridabd </p> 

      </div>
      <hr />
      <div className='Footer-2'>
        <p><i><RiSecurePaymentLine/></i> Safe And Secure Transitions</p>
        <p>Geniun Product</p>
        <p>Heigh Quality and Trusted Professionals</p>

      </div>
    </div>
    <div className='CopyRight'>
      <p>Copyright @ 2021 Home Service Beauty Parlour</p>
      <p>All Right Reserved | Terms Of Uses | Privacy Policy.Design And Powered By AbyM Technology</p>

    </div>
  </>
  )
}

export default Footer;