import React, { useState, useEffect, useRef } from 'react';
import image from '../images/frame.png'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

import image_ex from '../images/aa927cec67a0ac5884288eeab03bc92b.jpeg'

const Home = () => {

    const discoverRef = useRef(null);

    const scrollToTours = () => {
        if (discoverRef.current) {
            discoverRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="home">
            <section className="start-page">
                <div className="start-info">
                        <h1 className="title">Winter <br/>Vacation Trips</h1>
                        <p className="sub-title"> Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us!</p>
                        <div className='stat-link'>
                                <button className="btn" onClick={scrollToTours}>
                                    <a href="#" className='start'>Let's Go!</a>
                                </button>
                                <HiOutlineArrowLongRight/>
                        </div>
                </div>
                <div className="start-img">
                    <img src={image}/>
                </div>
            </section>
            <section ref={discoverRef} className="discover">
                <div className="discover-info">
                        <div className='discover-start'>
                            <h2>Discover</h2>
                            <div className='icons'>
                                <BsArrowLeftShort className="icon"/>
                                <BsArrowRightShort className="icon"/>
                            </div>
                        </div>
                        <div className='categories'>
                            <p className='category'>Popular</p>
                            <p className='category'>Featured</p>
                            <p className='category'>Most Visited</p>
                            <p className='category'>Europe</p>
                            <p className='category'>Asia</p>
                        </div>
                        <div className='discovery-options'>
                        <div className='discovery-destination'>
                            {/* Wrap the image inside a Link component */}
                            <Link to="/tour">
                                <div className="discovery-image">
                                    <img src={image_ex} alt="Destination"/>
                                    <div className='discovery-options-info'>
                                        <p className='discovery-options-text'>Northern Mountain</p>
                                    </div>
                                </div>
                            </Link>
                        </div> 
                    </div>
                </div>
            </section>
            <section className="recommend">
                <div className="recommend-info">
                        <h3>Recommended</h3>
                        <div className='recommend-options'>
                            <div className='recommend-destination'>
                                <div className="recommend-image">
                                    <img className="recommend-photo" src={image_ex}/>
                                    <div className='recommend-options-info'>
                                        <p className='recommend-options-text'>Greenough, Montana</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                </div>
            </section>
            
        </section>
    );
};

export default Home;