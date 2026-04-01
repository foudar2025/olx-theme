'use client';

import React from 'react';

export default function FilterSidebar({ filters, onChange }) {
  // دالة لتحديث الفلاتر عند التغيير
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (onChange) {
      onChange({ ...filters, [name]: value });
    }
  };

  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-64 mb-8 md:mb-0" dir="rtl">
      <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">الفلاتر</h3>
      
      {/* نطاق الثمن */}
      <div className="mb-6">
        <label className="block text-gray-900 font-bold mb-3 text-sm">نطاق الثمن (درهم)</label>
        <div className="flex gap-2">
          <input 
            type="number" 
            name="minPrice"
            placeholder="الأدنى" 
            value={filters?.minPrice || ''}
            onChange={handleInputChange}
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900 text-sm" 
          />
          <input 
            type="number" 
            name="maxPrice"
            placeholder="الأقصى" 
            value={filters?.maxPrice || ''}
            onChange={handleInputChange}
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900 text-sm" 
          />
        </div>
      </div>
      
      {/* الموقع */}
      <div className="mb-6">
        <label className="block text-gray-900 font-bold mb-3 text-sm">الموقع / المدينة</label>
        <input 
          type="text" 
          name="location"
          placeholder="مثلاً: الدار البيضاء" 
          value={filters?.location || ''}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900 text-sm" 
        />
      </div>
      
      {/* الحالة */}
      <div className="mb-6">
        <label className="block text-gray-900 font-bold mb-3 text-sm">حالة المنتج</label>
        <select 
          name="condition"
          value={filters?.condition || ''}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white text-sm"
        >
          <option value="">الكل</option>
          <option value="new">جديد</option>
          <option value="used">مستعمل</option>
        </select>
      </div>
      
      {/* سنة الموديل */}
      <div className="mb-8">
        <label className="block text-gray-900 font-bold mb-3 text-sm">سنة الموديل</label>
        <div className="flex gap-2">
          <select 
            name="yearFrom"
            value={filters?.yearFrom || ''}
            onChange={handleInputChange}
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white text-sm"
          >
            <option value="">من</option>
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select 
            name="yearTo"
            value={filters?.yearTo || ''}
            onChange={handleInputChange}
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white text-sm"
          >
            <option value="">إلى</option>
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* زر تطبيق الفلاتر */}
      <button 
        onClick={() => alert('جاري البحث بالنتائج المختارة...')}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
      >
        تطبيق الفلاتر
      </button>
    </aside>
  );
}
