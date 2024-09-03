



import React, { useState } from 'react';

const ProductList = ({ products, shopping, toggleCart }) => {

    // const [selectedProduct, setSelectedProduct] = useState(null);

    const getStars = (rating) => {
        return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    };

    const truncateText = (text) => {
        if (!text) return '';
        return text.length > 250 ? text.substring(0, 247) + '...' : text;
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id} className="bg-white shadow-md overflow-hidden text-gray-400">
                    <img className="w-full h-48 object-cover" src={product.img} alt={product.Product} />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{product.Product}</h3>
                        <p className="text-gray-400">{truncateText(product.description)}</p>
                        <div className="flex items-center justify-between mt-2">
                            <div className="text-orange-500 font-bold">${product.price}</div>
                            <div className="flex items-center">
                                {getStars(product.rating)}
                            </div>
                        </div>
                        <button
                            className="bg-orange-500 text-white px-4 py-2 mt-4 rounded"
                            onClick={() => toggleCart(product)}
                        >
                            {shopping.some(p => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
