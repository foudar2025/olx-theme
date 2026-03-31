'use client';

import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  
  return (
    <div 
      onClick={() => onClick && onClick(category)}
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer group active:scale-95"
      dir="rtl"
    >
      <div className="flex flex-col items-center text-center">
        {/* إطار الأيقونة */}
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors border border-blue-50">
          <IconComponent className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        
        {/* اسم الصنف */}
        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        
        {/* عدد الإعلانات */}
        <p className="text-[11px] text-gray-500 font-medium">
          {category.count} إعلان
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
