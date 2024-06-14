// AddInquiryModal.js
import React, { useState } from 'react';
import './Modal.css';

const AddInquiryModal = ({ onAddInquiry, onClose }) => {
    const [inquiry, setInquiry] = useState({
        customerName: '',
        email: '',
        phone: '',
        product: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInquiry({ ...inquiry, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddInquiry(inquiry);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add Inquiry</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="customerName" placeholder="Customer Name" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
                    <input type="text" name="product" placeholder="Product" onChange={handleChange} />
                    <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddInquiryModal;
