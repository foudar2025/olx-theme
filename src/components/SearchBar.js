'use client';

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // منطق البحث هنا
    console.log('البحث عن:', { searchTerm, location });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto" dir="rtl">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        {/* حقل البحث عن المنتج */}
        <div className="flex-2 relative">
          <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="علاش كتقلب؟ (طوموبيل، آيفون...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800 outline-none transition-all"
          />
        </div>

        {/* حقل اختيار المدينة */}
        <div className="flex-1 relative">
          <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="المدينة (كازا، الرباط...)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800 outline-none transition-all"
          />
        </div>

        {/* زر البحث */}
        <button 
          type="submit"
          className="bg-blue-600 text-white px-10 py-3 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-md active:scale-95"
        >
          بحث
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
