"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const exploreCards = [
  {
    title: 'سيارات جديدة',
    desc: 'اكتشف أحدث الموديلات في المغرب',
    icon: '🏢', // أيقونة وكالة سيارات
    route: '/category/new-cars'
  },
  {
    title: 'مقارنة السيارات',
    desc: 'حاير؟ قارن بين المواصفات بسهولة',
    icon: '⚖️',
    route: '/compare'
  },
  {
    title: 'تقييمات السيارات',
    desc: 'آراء الخبراء والمستخدمين حول السيارات',
    icon: '⭐',
    route: '/reviews'
  },
  {
    title: 'فحص السيارة',
    desc: 'احجز فحص تقني لسيارتك اليوم',
    icon: '🛠️',
    route: '/inspection'
  },
  {
    title: 'خدمات التوثيق',
    desc: 'كل ما تحتاجه لنقل الملكية والأوراق',
    icon: '📋',
    route: '/documentation'
  },
];

export default function MotorsExploreSection() {
  const router = useRouter();

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <section className="mt-8" dir="rtl">
      {/* تغيير العنوان الرئيسي ليتناسب مع اسم براندك BoostMe */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#002f34] mb-6 text-right">
        استكشف عالم السيارات مع BoostMe
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {exploreCards.map(card => (
          <div 
            key={card.title} 
            className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:shadow-md hover:border-blue-200 transition-all group"
            onClick={() => handleCardClick(card.route)}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <div className="font-bold text-[#002f34] mb-2 text-center text-lg">
              {card.title}
            </div>
            <div className="text-gray-500 text-sm text-center leading-relaxed">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
