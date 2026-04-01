'use client';

import React from 'react';

const links = [
  { label: 'لوحة التحكم', value: 'dashboard' },
  { label: 'إعلاناتي', value: 'my-ads' },
  { label: 'المفضلة', value: 'saved-ads' }, // أو "الإعلانات المحفوظة"
  { label: 'الإعدادات', value: 'settings' },
];

export default function DashboardSidebar({ active, onSelect }) {
  return (
    <aside 
      className="bg-white rounded-2xl shadow-md p-6 w-full md:w-64 mb-8 md:mb-0 flex md:flex-col gap-2 md:gap-4"
      dir="rtl"
    >
      {links.map((link) => (
        <button
          key={link.value}
          onClick={() => onSelect(link.value)}
          className={`w-full text-right px-6 py-3 rounded-xl font-bold transition-all duration-200 
            ${active === link.value 
              ? 'bg-blue-600 text-white shadow-blue-100 shadow-lg scale-[1.02]' 
              : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
            }`}
        >
          {link.label}
        </button>
      ))}
    </aside>
  );
}
