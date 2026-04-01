'use client';

import React, { useState } from 'react';

export default function Carousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  if (total === 0) return (
    <div className="w-full h-[420px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
      لا توجد صور متاحة
    </div>
  );

  // في الـ RTL: التالي هو السهم الأيسر، والسابق هو الأيمن
  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-full h-[420px] bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center group" dir="ltr">
      {/* الصورة الحالية */}
      <img
        src={images[current]}
        alt={`صورة المنتج ${current + 1}`}
        className="object-contain w-full h-full transition-opacity duration-500"
      />

      {/* زر التنقل الأيمن (السابق في المنطق العربي) */}
      <button
        onClick={prev}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#002f34] rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 border border-gray-100"
        aria-label="الصورة السابقة"
      >
        <span className="text-2xl font-bold">→</span>
      </button>

      {/* زر التنقل الأيسر (التالي في المنطق العربي) */}
      <button
        onClick={next}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#002f34] rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 border border-gray-100"
        aria-label="الصورة التالية"
      >
        <span className="text-2xl font-bold">←</span>
      </button>

      {/* مؤشرات الصور (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row-reverse gap-2 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-6 h-2 bg-blue-500' : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* عداد الصور الرقمي */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md">
        {total} / {current + 1}
      </div>
    </div>
  );
}
