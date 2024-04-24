// import axios from 'axios';
import { useState} from 'react';
// import { useParams } from 'react-router-dom';
import tourIm from "../images/21bf4dc788d92ad82c2a7aa23d2e6542.jpeg"
import { MdOutlinePlace } from "react-icons/md";
import reviewer from '../images/38ebe0d6948d90f6ec3b7905d8e27084.jpeg'
import Modal from "./Modal";
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowL} from "../icons/arrow-left.svg";


const Tour = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
                <div className="tour-details home">
                    <section className="chosen-tour">
                        <div>
                            <img className="tour-img" src={tourIm} alt="tour"/>
                        </div>
                        <Link to="/">
                            <div className='back-link'>
                                    <ArrowL/>
                                    <button className="btn">
                                        <a href="#" className='start'>Go back</a>
                                    </button>     
                            </div>
                        </Link>
                        <div className='tour-info'>
                            <h1 className="title">Mount Fuji</h1>
                            <div className="location">
                                <MdOutlinePlace />
                                <p>Honshu, Japan</p>
                            </div>
                            <div className="description">
                                <h4>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>
                            </div>
                            <h4>Reviews</h4>
                            <div className='review'>
                                <div className='review-info'>
                                    <img src={reviewer} className="reviewer"/>
                                    <p>Anonymous</p>
                                </div>  
                                <div>
                                    <p>That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                                </div>
                            </div>  
                            <div className="book-button">
                            <button
                                type="submit"
                                className="book"
                                onClick={() => setIsOpen(true)}>
                                 Book now
                            </button>
                            </div>
                        </div>
                    </section>
                </div>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    
                </Modal>
            
        </>
    );
};

export default Tour;