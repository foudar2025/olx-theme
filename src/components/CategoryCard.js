'use client';

import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  // التأكد من وجود الأيقونة لتجنب أخطاء التشغيل
  const IconComponent = category.icon || (() => <div className="w-8 h-8 bg-gray-200 rounded-full" />);
  
  return (
    <div 
      onClick={() => onClick && onClick(category)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer group active:scale-95"
      dir="rtl"
    >
      <div className="flex flex-col items-center text-center">
        {/* إطار الأيقونة بتأثير نبضي خفيف عند التحويم */}
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300 shadow-inner">
          <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
        </div>
        
        {/* اسم الصنف بخط بارز */}
        <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
          {category.name}
        </h3>
        
        {/* عدد الإعلانات بتنسيق أنيق */}
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
          {category.count.toLocaleString()} إعلان
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
