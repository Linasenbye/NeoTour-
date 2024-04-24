import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {ReactComponent as HumanIcon} from "../icons/human.svg"

import { ReactComponent as Close} from "../icons/close.svg";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '50px',
    zIndex: 1000, 
    boxShadow: '0 2px 8px 2px rgb(178, 178, 178, 0.45)', 
    borderRadius: '20px',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    zIndex: 1000, 
    
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
                <h2>Info</h2>
                <Close onClick={onClose} id = "close-icon"/>
            </div>
            <p>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
            <div>
                <p id="sub-title">Phone number</p>
                <PhoneInput 
                    defaultCountry="kg"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                />
            </div>
            <div>
                <p id="sub-title">Commentaries to trip</p>
                <input  className='input-box'
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write your wishes to trip..."
                />
            </div>
            <div>
                <p id='sub-title'>Number of People</p>
                 <div className="counter">
                    <button onClick={handleDecrement} disabled={numberOfPeople === 1} id='button'>-</button>
                        <span>{numberOfPeople}</span>
                    <button onClick={handleIncrement} disabled={numberOfPeople === 6}id='button'>+</button>
                    <HumanIcon />
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