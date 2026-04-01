"use client";

import React, { useState } from 'react';
import { Search, MapPin, Car, DollarSign } from 'lucide-react';

const MotorsHero = () => {
  const [make, setMake] = useState('اختر الماركة');
  const [model, setModel] = useState('اختر الموديل');
  const [location, setLocation] = useState('اختر المدينة');
  const [price, setPrice] = useState('اختر الثمن');

  // الماركات الأكثر شعبية في المغرب
  const makes = [
    'Dacia',
    'Renault',
    'Peugeot',
    'Volkswagen',
    'Citroën',
    'Toyota',
    'Hyundai',
    'Mercedes-Benz'
  ];

  const models = [
    'Logan',
    'Clio',
    '208',
    'Golf',
    'Sandero',
    'Tiguan',
    'Partner'
  ];

  // المدن المغربية الكبرى
  const locations = [
    'الدار البيضاء',
    'الرباط',
    'مراكش',
    'طنجة',
    'أكادير',
    'فاس',
    'مكناس',
    'وجدة'
  ];

  const prices = [
    'أقل من 50,000 درهم',
    '50,000 - 100,000 درهم',
    '100,000 - 200,000 درهم',
    '200,000 - 350,000 درهم',
    '350,000 - 500,000 درهم',
    'أكثر من 500,000 درهم'
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80")'
      }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            لقا الطوموبيل لي كتحلم بها في المغرب
          </h1>
          
          {/* تبويبات البيع/الكراء */}
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

        {/* فورم البحث */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* اختيار الماركة */}
              <div className="relative">
                <Car className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="اختر الماركة">اختر الماركة</option>
                  {makes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* اختيار الموديل */}
              <div className="relative">
                <Car className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="اختر الموديل">اختر الموديل</option>
                  {models.map((mod) => (
                    <option key={mod} value={mod}>{mod}</option>
                  ))}
                </select>
              </div>

              {/* اختيار المدينة */}
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

              {/* اختيار الثمن */}
              <div className="relative lg:col-span-2">
                <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium appearance-none"
                >
                  <option value="اختر الثمن">اختر الثمن</option>
                  {prices.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* زر البحث */}
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95">
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

export default MotorsHero;
