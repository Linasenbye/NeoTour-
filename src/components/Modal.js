import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { IoMdPerson } from "react-icons/io";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    zIndex: 1000
}


const Modal = ({open, onClose}) => {
    const [phone, setPhone] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleIncrement = () => {
        if (numberOfPeople < 6) {
            setNumberOfPeople(prevCount => prevCount + 1);
    }
    };

    const handleDecrement = () => {
        if (numberOfPeople > 1) {
            setNumberOfPeople(prevCount => prevCount - 1);
        }
    };
    const [comment, setComment] = useState('');
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        
        onClose();
    };

    if (!open) return null

    


    return ReactDOM.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL_STYLES}>
            <section className='modal'>
            <div className='title-and-close'>
                <h1>Info</h1>
                <IoCloseOutline onClick={onClose}/>
            </div>
            <p>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
            <div>
                <p>Phone number</p>
                <PhoneInput
                    defaultCountry="kg"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                />
            </div>
            <div>
                <p>Commentaries to trip</p>
                <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write your wishes to trip..."
                />
            </div>
            <div>
                <p>Number of People</p>
                 <div className="counter">
                    <button onClick={handleDecrement} disabled={numberOfPeople === 1}>-</button>
                        <span>{numberOfPeople}</span>
                    <button onClick={handleIncrement} disabled={numberOfPeople === 6}>+</button>
                    <IoMdPerson />
                    <span>{numberOfPeople} People</span>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
            </section>
            
        </div>
        </>, 
        document.getElementById('portal')
    );
};

export default Modal;