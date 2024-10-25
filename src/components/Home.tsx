import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './Search/SearchBar';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar onSearch={handleSearch} placeholder="Search for phones, electronics, and accessories..." />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to TechStore</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/products?category=Phones')}>
            <h2 className="text-xl font-semibold mb-4">Latest Phones</h2>
            <p className="text-gray-600">Discover our newest smartphone collection</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/products?category=Electronics')}>
            <h2 className="text-xl font-semibold mb-4">Electronics</h2>
            <p className="text-gray-600">Browse cutting-edge electronics</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/products?category=Accessories')}>
            <h2 className="text-xl font-semibold mb-4">Accessories</h2>
            <p className="text-gray-600">Find the perfect accessories for your devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}