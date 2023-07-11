import React from 'react'
import "../Franchies/Franchies.css";
import Image12 from '../navBar/image/Layer 58.png'
import Image21 from '../navBar/image/Mask Group 156.png'

const Franchies = () => {
    return (
        <div>
            <div>
                <h1 className='f-text1'>Franchies</h1>
                <p className='f-text2'>200+tech enable salons, Serving You Quality Services across 40+ cities</p>
                <div className='franchies'>
                    <div className='f-container'>
                        <h1 className='f-text'>Every thing</h1>
                        <h1 className='f-text-1'>About Franching</h1>
                        <p className='f-text-p'>200+tech enable salons, Serving You<br /> Quality Services across 40+ cities</p>
                        <button className='f-button'>Read More</button>
                    </div>

                </div>
            </div>

            <div>
                <h1 className='f-text1'>Institute</h1>
                <p className='f-text2'>When the age of person exceed to 50 years. It become very Important to take</p>
                <div className='Institute'>
                    <div className='Institute-1'>
                        <p className='f-text3 '> A long and strong </p>
                        <h1 className='f-text3'>Career awaits you</h1>
                        <p className='f-text3'>join dream wellness institute & become a</p><br />
                        <h1 className='f-text3'>Beauty Care Expert</h1>
                        <p className='f-text3'>Advanced Certificate Courses</p>
                        <button className='f-button f-button-1'>Read More</button>
                    </div>
                </div>
                <div className='Tesitimonials'>
                    <h1 className='f-text1'>Testimonials</h1>
                    <p className='f-text2'>When the age of person exceed to 50 years. It become very Important to take</p>
                    <div className='Tesitimonials-1'>

                    </div>
                </div>

                <div className='HspbApp'>
                    <div className='hspbApp1'>
                        <div className='hspbApp-1'>
                            <img src='https://media.discordapp.net/attachments/1121751668304920610/1122868657899442226/Group_7133.webp?width=328&height=590' alt='' />
                        </div>
                    </div>
                    <div className='hspbApp2'>
                        <div className='hspbApp-2'>
                            <h1>Download HSPB App</h1>
                            <p>To Consult with OMI astros and get a personalised Remedy Plan</p>
                            <p>for all your Problems. Download te app now</p>
                            <br />

                            <div>
                                <img src={Image12} alt='Google-Play' />
                                <img src={Image21} alt='img' />

                            </div>
                           


                            <p>Enter your Mobile Number to get link to Download</p>
                            <div className='search-1'>
                                <input type='text' />
                                <i><p>SEND LINK</p></i>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Franchies;