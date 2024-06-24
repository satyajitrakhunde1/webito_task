import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import ProductList from './components/ProductList';
import InquiryList from './components/InquiryList'; 
import OrderHistory from './components/OrderHistory';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="main-content"> 
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/inquiries" element={<InquiryList />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
