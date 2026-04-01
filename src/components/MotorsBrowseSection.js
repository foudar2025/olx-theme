'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// ماركات السيارات الأكثر شعبية في السوق المغربي
const makes = [
  'Dacia', 'Renault', 'Peugeot', 'Volkswagen', 'Citroën', 'Toyota', 'Hyundai',
  'Mercedes', 'BMW', 'Audi', 'Fiat', 'Ford', 'Kia', 'Nissan'
];

// ترجمة التبويبات (Tabs)
const tabs = [
  { id: 'Make', label: 'الماركة' },
  { id: 'Model', label: 'الموديل' },
  { id: 'City', label: 'المدينة' },
  { id: 'Price Range', label: 'نطاق الثمن' }
];

export default function MotorsBrowseSection() {
  const [activeTab, setActiveTab] = useState('Make');
  const router = useRouter();

  const handleMakeClick = (make) => {
    // التوجيه إلى صفحة التصنيف مع تحويل اسم الماركة للاحرف الصغيرة
    router.push(`/category/${make.toLowerCase()}`);
  };

  return (
    <section className="mt-8" dir="rtl">
      {/* العنوان الرئيسي للمجلد */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#002f34] mb-4 text-right">
        تصفح السيارات المستعملة
      </h2>

      {/* تبويبات التصفح */}
      <div className="flex gap-6 border-b mb-4 justify-start">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`pb-2 px-2 text-base font-bold border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-700' 
                : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* عرض ماركات السيارات */}
      {activeTab === 'Make' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-4">
          {makes.map(make => (
            <button
              key={make}
              className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm font-bold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition cursor-pointer"
              onClick={() => handleMakeClick(make)}
            >
              {make}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
