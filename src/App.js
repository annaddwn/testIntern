import React, { useState } from 'react';
import './index.css';
import { ProductCard } from "./components/ProductCard";

function App() {
    const [cart, setCart] = useState([]);

    const updateCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.name === product.name);
            if (existingProduct) {
                if (quantity === 0) {
                    return prevCart.filter(item => item.name !== product.name);
                }
                return prevCart.map(item => 
                    item.name === product.name ? { ...item, quantity, total: product.price * quantity } : item
                );
            } else {
                return [...prevCart, { ...product, quantity, total: product.price * quantity }];
            }
        });
    };

    return (
        <div className='App'>
            <header className="bg-[#253c92] text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Fruits Store</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href='#promo' className='hover:text-emerald-400'>Home</a></li>
                            <li><a href='#products' className='hover:text-emerald-400'>Products</a></li>
                            <li><a href='#about' className='hover:text-emerald-400'>Location</a></li>
                            <li><a href='#contact' className='hover:text-emerald-400'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className='bg-neutral-100 py-12 relative'>
                <div className="container mx-auto text-center relative z-10">
                    <h2 className='text-5xl font-extrabold text-[#253c92] mb-4'>Welcome to Fruits Store</h2>
                    <p className='text-2xl text-yellow-600  mb-8'>Find the freshest fruits here</p>
                </div>
            </section>

            <section id="promo" className='py-12 bg-[#e8f0fe]'>
                <div className='container mx-auto text-center'>
                    <h3 className='text-4xl font-bold text-[#253c92] mb-6'>Special Promotions</h3>
                    <p className='text-lg text-yellow-600 mb-4'>Special Promotions</p>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-6 items-center">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300">
                                <h4 className="text-xl font-bold text-[#253c92]">Buy 1 Get 1 Free</h4>
                                <p className="text-gray-600 mb-4">Buy 1 Get 1 Free</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300">
                                <h4 className="text-xl font-bold text-[#253c92]">20% Off All Apples</h4>
                                <p className="text-gray-600 mb-4">20% Off All Apples</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products" className='py-12 bg-gray-100'>
                <div className='container mx-auto text-center'>
                    <h3 className='text-4xl font-bold text-[#253c92] mb-6'>Our Products</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <ProductCard name="Mango" price={20000} image="" updateCart={updateCart} />
                        <ProductCard name="Apple" price={25000} image="" updateCart={updateCart} />
                        <ProductCard name="Banana" price={15000} image="" updateCart={updateCart} />
                    </div>
                    <button className='bg-neutral-400 text-white font-bold py-5 px-14 rounded-full hover:bg-[#253c92] transition duration-300 mt-10'>Order Now</button>
                </div>
            </section>

            <section className='py-12 bg-[#e8f0fe]'>
                <div className='container mx-auto text-center'>
                    <h3 className='text-4xl font-bold text-[#253c92] mb-6'>Total Order</h3>
                    <div className="text-left mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                        {cart.length === 0 ? (
                            <p className='text-gray-600'></p>
                        ) : (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index} className='flex justify-between mb-4'>
                                        <span>{item.name}</span>
                                        <span>{item.quantity} x {item.price} IDR = {item.total} IDR</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {cart.length > 0 && (
                            <div className="text-right mt-6 font-bold text-lg">
                                Total: {cart.reduce((sum, item) => sum + item.total, 0)} IDR
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section id="map" className="bg-gray-100">
                <div className="container mx-auto text-center pt-8">
                    <h3 className="text-3xl font-bold text-[#253c92]">Our Location</h3>
                    <p className="text-lg text-gray-600 mb-8">Visit our store location.</p>
                    <div className="rounded-lg overflow-hidden shadow-lg items-center flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.553457952126!2d106.71393501917721!3d-6.5602336839532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4b294aba49d%3A0x533530000f77bc38!2sIPB%20Darmaga!5e0!3m2!1sid!2sid!4v1735237214267!5m2!1sid!2sid"
                            width="90%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
            </section>

            <footer id="contact" className='bg-[#253c92] text-white py-4'>
                <div className='container mx-auto'>
                    <p className='text-lg'>Contact us: </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
