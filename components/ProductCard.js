import React from 'react';

export function ProductCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      <img src="https://via.placeholder.com/200" alt="Buah" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h4 className="text-xl font-bold text-green-800">Apel Malang</h4>
      <p className="text-green-600 mb-4">Harga: Rp 20.000 / kg</p>
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300">
        Beli Sekarang
      </button>
    </div>
  );
}
