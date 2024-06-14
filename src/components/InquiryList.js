// InquiryList.js
import React, { useState } from 'react';
import AddInquiryModal from './AddInquiryModal';
import './InquiryList.css';

const InquiryList = () => {
    const [inquiries, setInquiries] = useState([
        { customerName: 'John Doe', email: 'john@example.com', phone: '1234567890', product: 'Large Toy Boxes', message: 'Interested in bulk order.' },
        { customerName: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', product: 'AC Boxes', message: 'Can I get a discount?' },
    ]);

    const [showModal, setShowModal] = useState(false);

    const handleAddInquiry = (newInquiry) => {
        setInquiries([...inquiries, newInquiry]);
        setShowModal(false);
    };

    return (
        <div className="inquiry-list">
            <button onClick={() => setShowModal(true)} className="add-inquiry-btn">+ Add Inquiry</button>
            {showModal && <AddInquiryModal onAddInquiry={handleAddInquiry} onClose={() => setShowModal(false)} />}
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Product</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((inquiry, index) => (
                        <tr key={index}>
                            <td>{inquiry.customerName}</td>
                            <td>{inquiry.email}</td>
                            <td>{inquiry.phone}</td>
                            <td>{inquiry.product}</td>
                            <td>{inquiry.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InquiryList;
