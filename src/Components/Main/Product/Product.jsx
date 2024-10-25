

import React, { useState, useEffect } from 'react';
// import CartLogo from '../../../assets/react.svg';
import { FaBell } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';


function DemoProduct() {

    const { t } = useTranslation();
    const { All, Tables, Chairs, Beds, Shopping } = t("ProductPage.ProductNav");
    const Items = t('ProductList');

    const { rupeelogo, total, title, remove } = t("ProductPage");
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [shopping, setShopping] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'shopping') {
            setShowNotification(false);
        }
    };


    const addToCart = (product, quantity = 1) => {
        const existingProduct = shopping.find(p => p.id === product.id);
        if (existingProduct) {
            const newQuantity = Math.min(existingProduct.quantity + quantity, 5);
            setShopping(shopping.map(p => p.id === product.id ? { ...p, quantity: newQuantity } : p));
        } else {
            setShopping([...shopping, { ...product, quantity: 1 }]);
            setShowNotification(true);
        }
    };

    const removeFromCart = (productId) => {
        const existingProduct = shopping.find(p => p.id === productId);
        if (existingProduct.quantity > 1) {
            setShopping(shopping.map(p => p.id === productId ? { ...p, quantity: p.quantity - 1 } : p));
        } else {
            setShopping(shopping.filter(product => product.id !== productId));
        }
    };

    const toggleCart = (product) => {
        if (shopping.some(p => p.id === product.id)) {
            setShopping(shopping.filter(p => p.id !== product.id));
        } else {
            addToCart(product);
        }
    };


    const handleQuantityChange = (productId, newQuantity) => {
        const quantity = Math.min(Math.max(newQuantity, 1), 5);
        setShopping(shopping.map(p => p.id === productId ? { ...p, quantity } : p));
        setShowNotification(true);
    };

    const getTotalAmount = () => {
        return shopping.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };

    useEffect(() => {
        setProducts(Items);
    }, [Items]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    const getStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.round(rating);
        const emptyStars = totalStars - filledStars;
        return (
            <>
                {Array(filledStars).fill().map((_, i) => (
                    <svg key={i} className="inline w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}
                {Array(emptyStars).fill().map((_, i) => (
                    <svg key={i + filledStars} className="inline w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39-2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.236 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                ))}
            </>
        );
    };

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const [imageError, setImageError] = useState({});

    const handleImageError = (id) => {
        setImageError((prev) => ({
            ...prev,
            [id]: true,
        }));
    };


    const filteredProducts = selectedCategory === 'all'
        ? products
        : selectedCategory === 'shopping'
            ? shopping
            : products.filter(product =>

                product.category.en.toLowerCase() === selectedCategory.toLowerCase() ||
                product.category.mr.toLowerCase() === selectedCategory.toLowerCase()

            );


    return (

        <div className='container p-4 mx-auto mt-10'>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 font-bold">
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'all' ? ' text-orange-700 ' : ''}`}
                    onClick={() => handleCategoryChange('all')}
                >
                    {All}
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'Table' ? ' text-orange-700 ' : ''}`}
                    onClick={() => handleCategoryChange('Table')}
                >
                    {Tables}
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'Chair' ? ' text-orange-700 ' : ''}`}
                    onClick={() => handleCategoryChange('Chair')}
                >
                    {Chairs}
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'Bed' ? ' text-orange-700 ' : ''}`}
                    onClick={() => handleCategoryChange('Bed')}
                >
                    {Beds}
                </button>
                <button
                    className={`px-4 py-2 rounded relative ${selectedCategory === 'shopping' ? ' text-orange-700 ' : ''}`}
                    onClick={() => handleCategoryChange('shopping')}
                >
                    {Shopping}
                    {showNotification && (
                        <FaBell className="absolute top-0 right-0 text-red-500" />
                    )}
                </button>
            </div>



            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 cursor-pointer sm:grid-cols-2 md:grid-cols-3">

                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="overflow-hidden bg-white rounded-lg shadow-md"
                            data-aos="fade-up"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <img
                                className="object-cover w-full h-48"
                                src={imageError[product.id] ? '' : product.img}
                                // src={product.img}

                                alt={product.Product}
                                onError={() => handleImageError(product.id)}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.Product}</h3>
                                <p className="text-gray-600">{truncateText(product.description, 50)}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="font-bold text-orange-500">
                                        {rupeelogo} {product.price}
                                    </div>
                                    <div className="flex items-center">
                                        {getStars(product.rating)}
                                    </div>
                                </div>
                                <button
                                    className="px-4 py-2 mt-4 text-white bg-orange-500 rounded"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCart(product);
                                    }}
                                >
                                    {shopping.some(p => p.id === product.id) ? t('Remove from Cart') : t('Add to Cart')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (

                ""
                // <p>{t('ProductList.NoProducts')}</p>
            )}


            {selectedProduct && selectedProduct.img ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="w-11/12 p-6 bg-white rounded-lg shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3">
                        {/* Close Button */}
                        <button
                            className="float-right text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>

                        {/* Product Image */}
                        <img
                            className="object-cover w-full h-48 mb-4"
                            src={imageError[selectedProduct?.id] ? null : selectedProduct?.img}
                            alt={selectedProduct?.Product || 'Product Image'} // Fallback alt text
                            onError={() => handleImageError(selectedProduct?.id)}
                        />

                        {/* Product Information */}
                        <h3 className="mb-2 text-lg font-semibold">{selectedProduct?.Product}</h3>
                        <p className="mb-2 text-gray-600">{selectedProduct?.description}</p>
                        <div className="mb-2 font-bold text-orange-500">
                            {rupeelogo} {selectedProduct?.price}
                        </div>

                        {/* Rating Stars */}
                        <div className="flex items-center mb-2">
                            {getStars(selectedProduct?.rating)}
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className="px-4 py-2 mt-4 text-white bg-orange-500 rounded"
                            onClick={() => {
                                toggleCart(selectedProduct);
                                setSelectedProduct(null);
                            }}
                        >
                            {shopping.some(p => p.id === selectedProduct?.id) ? 'Remove from Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            ) : null}


            {selectedCategory === 'shopping' && (
                <div className="mt-10">

                    <h2 className="mb-4 text-2xl font-bold">{title}</h2>
                    {shopping.length === 0 ? (
                        <p>{t('Product is not  buy yet')}</p>
                    ) : (
                        <div className="p-4 rounded-lg shadow-md ">
                            <ul>
                                {shopping.map(item => (

                                    <li key={item.id} className="flex items-center justify-between py-2 border-b">
                                        <div className="flex items-center">
                                            <img className="object-cover w-12 h-12 mr-4"
                                                src={imageError[item.id] ? '' : item.img} alt={item.Product} />


                                            <div>
                                                <h3 className="font-semibold">{item.Product}</h3>
                                                <p>{rupeelogo} {item.price} x {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                className="px-2 py-1 text-gray-700 bg-gray-300 rounded"
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 text-gray-700 bg-gray-300 rounded"
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="px-2 py-1 ml-2 text-white bg-red-500 rounded"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                {remove}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between mt-4">
                                <span className="font-bold">{total}:</span>
                                <span className="font-bold">{rupeelogo} {getTotalAmount()}</span>
                            </div>
                        </div>

                    )}

                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => alert(" Thank You ❤")}
                            className="w-1/2 p-2 duration-300 ease-in-out transform border-4 border-orange-700 pransition-transform otext-orange-700 hover:bg-orange-700 hover:text-white hover:scale-105 active:scale-95 focus:outline-none">
                            Buy Now
                        </button>
                    </div>

                </div>
            )}

        </div>

    );
}

export default DemoProduct;


