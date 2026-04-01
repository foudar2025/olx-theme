"use client";

import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const PropertyHero = () => {
  const [propertyType, setPropertyType] = useState('أراضي وبقع');
  const [location, setLocation] = useState('اختر المدينة');
  const [areaSize, setAreaSize] = useState('اختر المساحة');
  const [areaUnit, setAreaUnit] = useState('متر مربع');
  const [price, setPrice] = useState('الثمن');

  const propertyTypes = [
    'أراضي وبقع',
    'منازل',
    'شقق وفيلات',
    'محلات تجارية',
    'أراضي تجارية',
    'أراضي صناعية'
  ];

  const locations = [
    'الدار البيضاء',
    'الرباط',
    'طنجة',
    'مراكش',
    'أكادير',
    'فاس',
    'طنجة'
  ];

  const areaSizes = [
    'أقل من 50 متر²',
    '50-100 متر²',
    '100-200 متر²',
    'أكثر من 200 متر²'
  ];

  const areaUnits = [
    'متر مربع',
    'هكتار',
    'خدام'
  ];

  const prices = [
    'أقل من 30 مليون سنتيم',
    '30 - 60 مليون سنتيم',
    '60 - 100 مليون سنتيم',
    '100 - 200 مليون سنتيم',
    'أكثر من 200 مليون سنتيم'
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80")'
      }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            لقا أفضل العقارات للبيع في المغرب
          </h1>
          
          {/* Buy/Rent Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 flex">
              <button className="px-6 py-2 rounded-md bg-blue-100 text-blue-700 font-bold">
                شراء
              </button>
              <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-800 font-bold">
                كراء
              </button>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* نوع العقار */}
              <div className="relative">
                <Home className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* الموقع */}
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="اختر المدينة">اختر المدينة</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* المساحة */}
              <div className="relative">
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <select
                  value={areaSize}
                  onChange={(e) => setAreaSize(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="اختر المساحة">اختر المساحة</option>
                  {areaSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* وحدة القياس */}
              <div className="relative">
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  {areaUnits.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>

              {/* الثمن */}
              <div className="relative">
                <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="الثمن">الثمن</option>
                  {prices.map((priceRange) => (
                    <option key={priceRange} value={priceRange}>{priceRange}</option>
                  ))}
                </select>
              </div>

              {/* زر البحث */}
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
