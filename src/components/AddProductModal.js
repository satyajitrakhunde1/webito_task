// AddProductModal.js
import React, { useState } from 'react';
import './Modal.css';

const AddProductModal = ({ onAddProduct, onClose }) => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        quantity: '',
        weight: '',
        dimension: { length: '', width: '', height: '' },
        buyPrice: '',
        sellPrice: { min: '', max: '' },
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("dimension.")) {
            const dimensionField = name.split(".")[1];
            setProduct((prevState) => ({
                ...prevState,
                dimension: {
                    ...prevState.dimension,
                    [dimensionField]: value,
                },
            }));
        } else if (name.startsWith("sellPrice.")) {
            const sellPriceField = name.split(".")[1];
            setProduct((prevState) => ({
                ...prevState,
                sellPrice: {
                    ...prevState.sellPrice,
                    [sellPriceField]: value,
                },
            }));
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(product);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
                    <input type="text" name="category" placeholder="Product Category" onChange={handleChange} />
                    <input type="number" name="quantity" placeholder="Product Quantity" onChange={handleChange} />
                    <input type="text" name="weight" placeholder="Product Weight" onChange={handleChange} />
                    <input type="text" name="dimension.length" placeholder="Length" onChange={handleChange} />
                    <input type="text" name="dimension.width" placeholder="Width" onChange={handleChange} />
                    <input type="text" name="dimension.height" placeholder="Height" onChange={handleChange} />
                    <input type="number" name="buyPrice" placeholder="Buy Price" onChange={handleChange} />
                    <input type="number" name="sellPrice.min" placeholder="Sell Price Min" onChange={handleChange} />
                    <input type="number" name="sellPrice.max" placeholder="Sell Price Max" onChange={handleChange} />
                    <input type="file" name="image" onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;
