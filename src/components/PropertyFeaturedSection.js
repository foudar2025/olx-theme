"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AdCard from './AdCard';

const PropertyFeaturedSection = () => {
  const router = useRouter();

  const featuredProperties = [
    {
      id: 1,
      title: 'فيلا فاخرة للبيع',
      price: '450 مليون سنتيم',
      location: 'حي الرياض، الرباط',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
      date: 'منذ يوم',
      featured: true
    },
    {
      id: 2,
      title: 'شقة عصرية بوسط المدينة',
      price: '120 مليون سنتيم',
      location: 'المعاريف، الدار البيضاء',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      date: '3 أيام',
      featured: true
    },
    {
      id: 3,
      title: 'محل تجاري بموقع استراتيجي',
      price: '85 مليون سنتيم',
      location: 'وسط المدينة، طنجة',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      date: 'أسبوع واحد',
      featured: true
    },
    {
      id: 4,
      title: 'فيرمة (ضيعة) مع مسبح',
      price: '320 مليون سنتيم',
      location: 'طريق فاس، مراكش',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
      date: 'أسبوعين',
      featured: true
    }
  ];

  const budgetRanges = [
    'أقل من 30 مليون',
    '30 - 60 مليون',
    '60 - 100 مليون',
    '100 - 200 مليون',
    '200 - 500 مليون',
    'أكثر من 500 مليون'
  ];

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  const handleBudgetClick = (range) => {
    router.push(`/category/property?budget=${encodeURIComponent(range)}`);
  };

  return (
    <section className="py-12 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العقارات المميزة */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002f34]">
              عقارات مميزة
            </h2>
            <button 
              onClick={() => router.push('/category/property')}
              className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1 transition-colors"
            >
              عرض الكل ←
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            {featuredProperties.map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>
        </div>

        {/* البحث حسب الميزانية */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold text-[#002f34] mb-6 text-right">
            البحث حسب الميزانية (بالسنتيم)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {budgetRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleBudgetClick(range)}
                className="px-4 py-4 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-xl text-gray-700 font-bold transition-all border border-transparent hover:border-blue-200 shadow-sm"
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeaturedSection;
