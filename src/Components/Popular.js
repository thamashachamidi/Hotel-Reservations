import React from "react";
import './Popular.css'

import {IoIosArrowRoundBack}from 'react-icons/io'
import{AiOutlineArrowRight} from 'react-icons/ai'
import{BsArrowRightShort} from 'react-icons/bs'
import{BsDot} from 'react-icons/bs'


const Popular = ()=> {
    return (
        <section className='popular section container'>
            <div className="secContainer">

                <div className="secHeader flex">

                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular destination 
                            
                        </h2> 
                        <p>
                    From histroical ciites to natural spectulars, come see the best of the world!
                    </p> 
                    </div> 
                    

                    <div className="iconsDiv flex">
                        <IoIosArrowRoundBack className="icon LeftIcon"/>
                        <AiOutlineArrowRight className="icon"/>
                    </div>

                </div>

                <div className="mainContent grid">
                    <div className="singleDestination">
                        <div className="destImage">
                            
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1" alt="Image title"/>

                            <div className="overlayInfo">
                                <h3>Some text</h3>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p> 

                                <BsArrowRightShort className='icon'/>
                            </div>
                        </div> 

                        <div className="destFooter">
                            <div className="number">
                                01
                            </div> 

                            <div className="destText flex">
                                <h6>
                                    London
                                </h6> 
                                <span className='flex'>
                                    <span className="dot">
                                        <BsDot className="icon"/>

                                    </span> 

                                Dot 
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Popular