'use client';

import React, { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';

const AdCard = ({ ad, onAdClick, onClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    // منطق حفظ الإعلان هنا
    console.log('تم حفظ الإعلان:', ad.id);
  };

  const handleClick = () => {
    if (onAdClick) onAdClick(ad);
    else if (onClick) onClick(ad);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group relative"
      dir="rtl"
    >
      {/* علامة إعلان مميز */}
      {ad.featured && (
        <div className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 absolute z-10 top-3 right-3 rounded-full shadow-sm">
          إعلان مميز
        </div>
      )}
      
      <div className="relative">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          {ad.image ? (
            <img 
              src={ad.image} 
              alt={ad.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="text-gray-400 text-sm font-medium">صورة غير متوفرة</span>
          )}
        </div>
        
        {/* زر الإعجاب / الحفظ - وضعناه في اليسار لأن الاتجاه RTL */}
        <button 
          onClick={handleSave}
          className={`absolute bottom-3 left-3 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
            isSaved 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-800 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-4 text-right">
        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]">
          {ad.title}
        </h3>
        
        <div className="flex flex-col mb-3">
          <span className="text-xl font-black text-blue-600">{ad.price}</span>
          <span className="text-[10px] text-gray-400 mt-1">{ad.date}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-xs gap-1 border-t pt-3">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span className="truncate">{ad.location}</span>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
