import React, { useState } from 'react';
import './OrderHistory.css'; // Import your CSS file

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      no: 1,
      orderId: '#01234512',
      orderedBy: 'Yasmeen Roy',
      address: 'Katargam, Surat',
      mobileNumber: '01234567890',
      deliveryDate: '28-02-2024',
      sellingPrice: '500 Rs',
      status: 'Delivered',
      reason: ''
    },
    {
      no: 2,
      orderId: '#01234512',
      orderedBy: 'Himansh Chaudhary',
      address: 'Adajan, Surat',
      mobileNumber: '01234567890',
      deliveryDate: '20-02-2024',
      sellingPrice: '800 Rs',
      status: 'Late Deliverd',
      reason: 'Because of some issue...'
    },
    {
      no: 3,
      orderId: '#01234512',
      orderedBy: 'JK Manufacturing',
      address: 'Katargam, Surat',
      mobileNumber: '01234567890',
      deliveryDate: '14-02-2024',
      sellingPrice: '900 Rs',
      status: 'Delivered',
      reason: ''
    }
  ]);

  return (
    <div className="order-history-container">
      <div className="order-history-header">
        <div className="logo">
          <h2>Logo Here</h2>
        </div>
        <div className="user-profile">
          <img src="profile.png" alt="Profile" />
          <span>Sem Roy</span>
          {/* <span>semr12@.com</span> */}
        </div>
      </div>
   
      <div className="order-history-content">
        <h1>Order History</h1>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search Here" />
        </div>
        <div className="filter-bar">
          <div className="date-filter">
            <i className="far fa-calendar-alt"></i>
            <input type="date" />
          </div>
          <div className="status-filter">
            <select>
              <option value="all">Select Order Status</option>
              <option value="delivered">Delivered</option>
              <option value="lateDelivered">Late Delivered</option>
            </select>
          </div>
        </div>
        <table className="order-history-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Order ID</th>
              <th>Ordered By</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Delivery Date</th>
              <th>Selling Price</th>
              <th>Status</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.no}>
                <td>{order.no}</td>
                <td>{order.orderId}</td>
                <td>{order.orderedBy}</td>
                <td>{order.address}</td>
               <td>{order.mobileNumber}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.sellingPrice}</td>
                <td
                  className={`order-status-${order.status.toLowerCase()}`}
                >
                  {order.status}
                </td>
                <td>{order.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;