"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// بيانات تجريبية لسيارات مميزة في السوق المغربي
const featuredCars = [
  {
    id: 1,
    title: 'Dacia Sandero 2021',
    price: '95,000 درهم',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Renault Clio 5 2020',
    price: '110,000 درهم',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Peugeot 208 2019',
    price: '105,000 درهم',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function MotorsFeaturedSection() {
  const router = useRouter();

  const handleCarClick = (car) => {
    // التوجه لصفحة تفاصيل المنتج
    router.push(`/product/${car.id}`);
  };

  return (
    <section className="mt-8" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002f34]">سيارات مستعملة مميزة</h2>
        <button 
          onClick={() => router.push('/category/motors')}
          className="text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg transition-colors"
        >
          عرض المزيد
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCars.map(car => (
          <div 
            key={car.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col cursor-pointer hover:shadow-md transition-all group"
            onClick={() => handleCarClick(car)}
          >
            <div className="relative mb-3">
              <img 
                src={car.image} 
                alt={car.title} 
                className="w-full h-48 object-cover rounded-xl group-hover:opacity-95 transition-opacity" 
              />
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                إعلان مميز
              </span>
            </div>
            
            <div className="px-1">
              <div className="font-bold text-xl text-blue-700 mb-1">{car.price}</div>
              <div className="text-gray-800 font-medium text-md mb-2">{car.title}</div>
              
              <div className="flex items-center text-gray-400 text-xs">
                <span>الدار البيضاء، المغرب</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
