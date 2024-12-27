import React, { useState } from 'react';

export function ProductCard({ name, price, image, updateCart }) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCart({ name, price }, newQuantity);
    };

    const decrement = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCart({ name, price }, newQuantity);
        }
    };

    return (
        <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300'>
            <img src={image} alt={name} className='w-full h-48 object-cover mb-4 rounded-lg' />
            <h4 className='text-xl font-bold text-[#253c92]'>{name}</h4>
            <p className='text-black mb-4'>Price: {price} IDR</p>
            {quantity > 0 ? (
                <div className='flex justify-center items-center space-x-4'>
                    <button onClick={decrement} className='bg-[#253c92] text-white py-2 px-4 rounded-lg'>-</button>
                    <span className='text-xl font-bold'>{quantity}</span>
                    <button onClick={increment} className='bg-[#253c92] text-white py-2 px-4 rounded-lg'>+</button>
                </div>
            ) : (
                <button onClick={increment} className='bg-[#253c92] text-white py-2 px-4 rounded-lg'>Buy Now</button>
            )}
        </div>
    );
}
