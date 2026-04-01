"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AdCard from './AdCard';

const PropertyExploreSection = () => {
  const router = useRouter();

  const propertyAds = [
    {
      id: 1,
      title: 'منزل مستقل للبيع',
      price: '120 مليون سنتيم',
      location: 'بوسكورة، الدار البيضاء',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
      date: 'يومين',
      featured: true
    },
    {
      id: 2,
      title: 'بقعة أرضية تجارية 100م²',
      price: '250 مليون سنتيم',
      location: 'طنجة البالية، طنجة',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      date: 'أسبوع واحد',
      featured: false
    },
    {
      id: 3,
      title: 'شقة للبيع غرفتين وصالون',
      price: '85 مليون سنتيم',
      location: 'أكدال، الرباط',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
      date: '3 أيام',
      featured: true
    },
    {
      id: 4,
      title: 'بقعة أرضية للسكن',
      price: '32 مليون سنتيم',
      location: 'طريق صفرو، فاس',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80',
      date: '5 أيام',
      featured: false
    },
    {
      id: 5,
      title: 'محل تجاري محفظ',
      price: '180 مليون سنتيم',
      location: 'جليز، مراكش',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      date: 'يوم واحد',
      featured: true
    },
    {
      id: 6,
      title: 'فيلا فاخرة للبيع',
      price: '550 مليون سنتيم',
      location: 'طريق تاهلة، وجدة',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
      date: 'أسبوعين',
      featured: false
    }
  ];

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <section className="py-12 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002f34]">
            استكشف العقارات
          </h2>
          <button 
            onClick={() => router.push('/category/property')}
            className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
          >
            عرض جميع العقارات ←
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyAds.map((ad) => (
            <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyExploreSection;
