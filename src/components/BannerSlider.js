'use client';

import React, { useEffect, useState } from 'react';

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    alt: 'أحدث الهواتف الذكية بالمغرب',
    link: '/category/mobiles',
  },
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    alt: 'سيارات مستعملة للبيع',
    link: '/category/cars',
  },
  {
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
    alt: 'عروض الحواسيب المحمولة',
    link: '/category/laptops',
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
    alt: 'عقارات وشقق للكراء',
    link: '/category/property',
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  // التغيير التلقائي كل 5 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <a href={banners[current].link} className="block transition-transform duration-700 ease-in-out">
          <img
            src={banners[current].image}
            alt={banners[current].alt}
            className="w-full h-48 md:h-64 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-700"
          />
          {/* طبقة تظليل خفيفة مع نص توضيحي */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-10">
            <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-md">
              {banners[current].alt}
            </h2>
          </div>
        </a>
      </div>

      {/* المؤشرات (Indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === current 
                ? 'w-8 h-2 bg-blue-600' 
                : 'w-2 h-2 bg-white/80 hover:bg-white'
            }`}
            onClick={() => goTo(idx)}
            aria-label={`الذهاب للإعلان ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
