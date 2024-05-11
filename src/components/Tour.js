import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlinePlace } from "react-icons/md";
import Modal from "./Modal";
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowL} from "../icons/arrow-left.svg";



const Tour = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`http://137.184.224.34:8080/api/products/${tourId}`);
                if (response.ok) {
                    const data = await response.json();
                    setTour(data);
                } else {
                    console.log('Failed to fetch tour data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTour();
    }, [tourId]);

    if (!tour) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
                <div className="tour-details home">
                    <section className="chosen-tour">
                        <div>
                            <img className="tour-img" src={tour.imagePath} alt="tour"/>
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
                            <h1 className="title">{tour.name}</h1>
                            <div className="location">
                                <MdOutlinePlace />
                                <p>{tour.location}</p>
                            </div>
                            <div className="description">
                                <h4>Description</h4>
                                <p>{tour.description}</p>
                            </div>
                            <h4>Reviews</h4>
                            {tour.reviews.map((review, index) => (
                                <div className='review' key={index}>
                                    <div className='review-info'>
                                        <img src={review.reviewerImage} className="reviewer" alt="Reviewer"/>
                                        <p>{review.reviewer}</p>
                                    </div>  
                                    <div>
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            ))}
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