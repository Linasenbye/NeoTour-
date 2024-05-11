import React, { useState, useEffect, useRef } from 'react';
import image from '../images/frame.png'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { ReactComponent as ArrowR} from "../icons/arrow-right.svg";
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation } from 'swiper';


  
const API_URL_POPULAR =`http://137.184.224.34:8080/api/products/popular`;
const API_URL_FEATURED =`http://137.184.224.34:8080/api/products/featured`;
const API_URL_MOST_VISITED =`http://137.184.224.34:8080/api/products/mostVisited`;
const API_URL_EUROPE =`http://137.184.224.34:8080/api/products/europe`;
const API_URL_ASIA =`http://137.184.224.34:8080/api/products/asia`;


const API_URL_RECOM =`http://137.184.224.34:8080/api/products/recommended`;

SwiperCore.use([Navigation]);

const Home = () => {
    const discoverRef = useRef(null);
    const swiperRef = useRef(null)
    const [tours, setTours] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('popular');
    const [recommendedTours, setRecommendedTours] = useState([]);
    
    useEffect(() => {
        const fetchTours = async () => {
            try {
                let apiUrl = API_URL_POPULAR;

                switch (selectedCategory) {
                    case 'popular':
                        apiUrl = API_URL_POPULAR;
                        break;
                    case 'featured':
                        apiUrl = API_URL_FEATURED;
                        break;
                    case 'mostVisited':
                        apiUrl = API_URL_MOST_VISITED;
                        break;
                    case 'europe':
                        apiUrl = API_URL_EUROPE;
                        break;
                    case 'asia':
                        apiUrl = API_URL_ASIA;
                        break;
                    default:
                        apiUrl = API_URL_POPULAR;
                }

                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    setTours(data);
                } else {
                    console.log('Failed to fetch data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTours();
    }, [selectedCategory]);

    useEffect(() => {
        const fetchRecommendedTours = async () => {
            try {
                const response = await fetch(API_URL_RECOM);
                if (response.ok) {
                    const data = await response.json();
                    setRecommendedTours(data);
                } else {
                    console.log('Failed to fetch recommended tours. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching recommended tours:', error);
            }
        };

        fetchRecommendedTours();
    }, []);

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
                    <div className='start-link'>
                        <button className="btn" onClick={scrollToTours}>
                            <a href="#" className='start'>Let's Go!</a>
                        </button>
                        <ArrowR/>
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
                            <BsArrowLeftShort className="icon" onClick={() => {if (swiperRef.current) swiperRef.current.slidePrev()}}/>
                            <BsArrowRightShort className="icon" onClick={() => {if (swiperRef.current) swiperRef.current.slideNext()}}/>
                        </div>
                    </div>
                    <div className='categories'>
                        <p className='category' onClick={() => setSelectedCategory('popular')}>Popular</p>
                        <p className='category' onClick={() => setSelectedCategory('featured')}>Featured</p>
                        <p className='category' onClick={() => setSelectedCategory('mostVisited')}>Most Visited</p>
                        <p className='category' onClick={() => setSelectedCategory('europe')}>Europe</p>
                        <p className='category' onClick={() => setSelectedCategory('asia')}>Asia</p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        direction="horizontal"
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    >
                        {tours.map(tour => (
                            <SwiperSlide key={tour.id}>
                                <div className='discovery-destination'>
                                    <Link to="/tour">
                                        <div className="discovery-image">
                                            <img src={tour.imagePath} alt="Destination"/>
                                            <div className='discovery-options-info'>
                                                <p className='discovery-options-text'>{tour.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className="recommend">
                <div className="recommend-info">
                    <h3>Recommended</h3>
                    <div className='recommend-options'>
                        {recommendedTours.map(tour => (
                            <div className='recommend-destination' key={tour.id}>
                                <Link to="/tour">
                                <div className="recommend-image">
                                    <img className="recommend-photo" src={tour.imagePath} alt="Destination"/>
                                    <div className='recommend-options-info'>
                                        <p className='recommend-options-text'>{tour.name}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>       
        </section>
    );
};

export default Home;
