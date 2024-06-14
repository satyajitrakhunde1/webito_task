// ProductList.js
import React, { useState } from 'react';
import AddProductModal from './AddProductModal';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([
        { name: 'Large Toy Boxes For Kids', dimension: '24 x 18 x 18 inch', weight: '250 g', stock: 1500, buyPrice: 500, sellPrice: '₹500 - ₹800', stockLevel: 'Full' },
        { name: 'AC Boxes', dimension: '24 x 18 x 18 inch', weight: '250 g', stock: 500, buyPrice: 600, sellPrice: '₹600 - ₹900', stockLevel: 'Mid' },
        { name: 'Toy Boxes', dimension: '24 x 18 x 18 inch', weight: '250 g', stock: 100, buyPrice: 700, sellPrice: '₹700 - ₹900', stockLevel: 'Low' },
        { name: 'Toy Boxes', dimension: '24 x 18 x 18 inch', weight: '250 g', stock: 1500, buyPrice: 800, sellPrice: '₹800 - ₹900', stockLevel: 'Full' },
    ]);

    const [showModal, setShowModal] = useState(false);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
        setShowModal(false);
    };

    return (
        <div className="product-list">
            <button onClick={() => setShowModal(true)} className="add-product-btn">+ Add Product</button>
            {showModal && <AddProductModal onAddProduct={handleAddProduct} onClose={() => setShowModal(false)} />}
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Dimension</th>
                        <th>Weight</th>
                        <th>Available Stock</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                        <th>Stock Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.dimension}</td>
                            <td>{product.weight}</td>
                            <td>{product.stock} Boxes</td>
                            <td>₹{product.buyPrice}</td>
                            <td>{product.sellPrice}</td>
                            <td><span className={`stock-level ${product.stockLevel.toLowerCase()}`}>{product.stockLevel}</span></td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
