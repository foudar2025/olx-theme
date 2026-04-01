"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdCard from '@/components/AdCard';
import FilterSidebar from '@/components/FilterSidebar';

// البيانات المترجمة لجميع الأقسام
const categoryData = {
  // أقسام السيارات والمحركات
  suzuki: {
    title: 'سيارات سوزوكي',
    description: 'تصفح أفضل عروض سيارات سوزوكي في المغرب',
    ads: [
      {
        id: 1,
        title: 'Suzuki Mehran موديل 2016 نقية',
        price: '45,000 درهم',
        location: 'سيدي معروف، الدار البيضاء',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        date: 'منذ 5 ساعات',
        featured: false
      },
      {
        id: 2,
        title: 'Suzuki Cultus موديل 2018',
        price: '65,000 درهم',
        location: 'حي السلام، أكادير',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: 'منذ يوم واحد',
        featured: true
      }
    ]
  },
  toyota: {
    title: 'سيارات تويوتا',
    description: 'اكتشف سيارات تويوتا المستعملة والجديدة',
    ads: [
      {
        id: 4,
        title: 'Toyota Corolla موديل 2017 مازوط',
        price: '135,000 درهم',
        location: 'طنجة المدينة، طنجة',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: 'منذ 3 ساعات',
        featured: true
      }
    ]
  },
  honda: {
    title: 'سيارات هوندا',
    description: 'عروض حصرية لسيارات هوندا في المغرب',
    ads: [
      {
        id: 6,
        title: 'Honda Civic موديل 2018 خيل 8',
        price: '160,000 درهم',
        location: 'حي الرياض، الرباط',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: 'منذ ساعتين',
        featured: true
      }
    ]
  },
  motors: {
    title: 'جميع المحركات',
    description: 'تصفح جميع أنواع السيارات والدراجات النارية',
    ads: [
      {
        id: 1,
        title: 'Honda Civic موديل 2018',
        price: '160,000 درهم',
        location: 'عين السبع، الدار البيضاء',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: 'منذ ساعتين',
        featured: true
      }
    ]
  },
  // أقسام العقارات
  houses: {
    title: 'منازل للبيع',
    description: 'ابحث عن منزل أحلامك في أفضل أحياء المغرب',
    ads: [
      {
        id: 101,
        title: 'منزل محفظ للبيع 100 متر',
        price: '650,000 درهم',
        location: 'طريق صفرو، فاس',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
        date: 'منذ يومين',
        featured: true
      }
    ]
  },
  apartments: {
    title: 'شقق للبيع',
    description: 'شقق سكنية واقتصادية بمختلف المدن',
    ads: [
      {
        id: 201,
        title: 'شقة فاخرة للبيع بغرفتين',
        price: '450,000 درهم',
        location: 'الداوديات، مراكش',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        date: 'منذ 3 أيام',
        featured: true
      }
    ]
  },
  // الأقسام الرئيسية في الصور التي أرسلتها
  mobiles: {
    title: 'هواتف محمولة',
    description: 'تصفح أحدث الهواتف الذكية للبيع في المغرب',
    ads: [
      {
        id: 1,
        title: 'Samsung Galaxy S21 Ultra نقية',
        price: '4,500 درهم',
        location: 'المعاريف، الدار البيضاء',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
        date: 'منذ 5 ساعات',
        featured: false
      },
      {
        id: 2,
        title: 'iPhone 13 Pro Max 256GB',
        price: '7,200 درهم',
        location: 'السويسي، الرباط',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80',
        date: 'منذ يوم واحد',
        featured: true
      }
    ]
  },
  cars: {
    title: 'سيارات للبيع',
    description: 'أفضل عروض السيارات المستعملة في السوق المغربي',
    ads: [
      {
        id: 4,
        title: 'Honda Civic 2018 للبيع',
        price: '165,000 درهم',
        location: 'بني مكادة، طنجة',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: 'منذ ساعتين',
        featured: true
      }
    ]
  },
  motorcycles: {
    title: 'دراجات نارية',
    description: 'تصفح عروض الدراجات النارية في المغرب',
    ads: [
      {
        id: 7,
        title: 'Honda CG 125 حالة ممتازة',
        price: '11,500 درهم',
        location: 'وسط المدينة، القنيطرة',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        date: 'منذ يوم واحد',
        featured: false
      }
    ]
  },
  electronics: {
    title: 'إلكترونيات وأجهزة منزلية',
    description: 'كل ما تحتاجه من أجهزة منزلية وإلكترونية',
    ads: [
      {
        id: 9,
        title: 'MacBook Pro 2020 i5/16GB',
        price: '8,900 درهم',
        location: 'حي أكدال، الرباط',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
        date: 'منذ يوم واحد',
        featured: true
      }
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const [showFilters, setShowFilters] = useState(false);
  
  const category = categoryData[slug] || categoryData.motors;

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-right">
          <h1 className="text-3xl font-bold text-[#002f34] mb-2">{category.title}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {/* زر الفلاتر للموبايل */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-right flex items-center justify-between"
          >
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="font-medium text-gray-700">تصفية النتائج (فلاتر)</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* سحب شبكة الإعلانات لليسار في حال الـ RTL */}
          <div className="lg:w-3/4 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
              {category.ads.map((ad) => (
                <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
              ))}
            </div>
          </div>

          {/* الفلاتر الجانبية */}
          <div className={`lg:w-1/4 order-1 lg:order-2 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
