'use client';

import React, { useState } from 'react';

// ترجمة الأقسام لتناسب المستخدم المغربي
const tabs = [
  { id: 'Used Cars', label: 'سيارات مستعملة' },
  { id: 'New Cars', label: 'سيارات جديدة' },
  { id: 'Car Comparison', label: 'مقارنة السيارات' },
  { id: 'Car Reviews', label: 'مراجعات وآراء' },
  { id: 'Car Finance', label: 'سلف السيارات' },
  { id: 'Car Inspection', label: 'الفحص التقني' },
  { id: 'Car Insurance', label: 'تأمين السيارات' },
  { id: 'More', label: 'المزيد' },
];

export default function MotorsNavbarTabs({ activeTab: propActiveTab, onTabChange }) {
  // الحالة الافتراضية للتبويب النشط
  const [activeTab, setActiveTab] = useState(propActiveTab || 'Used Cars');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <nav className="w-full border-b bg-white mb-4" dir="rtl">
      <div className="flex flex-wrap gap-2 md:gap-6 py-2 overflow-x-auto no-scrollbar justify-start px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-base font-bold px-2 pb-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-200'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
