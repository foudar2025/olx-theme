"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PropertyNavbarTabs = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  // ترجمة التبويبات لتناسب العقارات في المغرب
  const tabs = [
    { id: 'Buy', label: 'شراء', hasDropdown: true },
    { id: 'Rent', label: 'كراء', hasDropdown: true },
    { id: 'Projects', label: 'مشاريع سكنية', hasDropdown: false },
    { id: 'Blogs', label: 'نصائح عقارية', hasDropdown: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* استخدام space-x-reverse لضمان المسافات الصحيحة في وضع RTL */}
        <div className="flex items-center space-x-8 space-x-reverse">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative">
              <button
                className={`flex items-center gap-1 py-4 px-3 font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {tab.hasDropdown && (
                  <ChevronDown className="w-4 h-4 mr-1" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyNavbarTabs;
