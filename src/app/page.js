'use client';

import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import AdCard from '@/components/AdCard';
import Footer from '@/components/Footer';
import { Car, Home, Laptop, Gamepad2, Shirt, Baby, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BannerSlider from '@/components/BannerSlider';

// تصنيفات الصفحة الرئيسية
const categories = [
  { icon: Car, name: 'طوموبيلات', slug: 'vehicles', count: '12,345' },
  { icon: Home, name: 'عقارات', slug: 'property', count: '8,567' },
  { icon: Laptop, name: 'إلكترونيات', slug: 'electronics', count: '15,432' },
  { icon: Shirt, name: 'موضة وملابس', slug: 'fashion', count: '9,876' },
  { icon: Gamepad2, name: 'ألعاب وترفيه', slug: 'games', count: '4,321' },
  { icon: Baby, name: 'مستلزمات الأطفال', slug: 'kids', count: '6,789' },
];

const recentAds = [
  // هواتف
  {
    id: 1,
    title: 'Samsung Galaxy S21 Ultra نقي',
    price: '5,500 DH',
    location: 'الدار البيضاء، المعاريف',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    date: 'منذ 5 ساعات',
    featured: false,
    category: 'هواتف',
  },
  {
    id: 2,
    title: 'iPhone 13 Pro Max بالكرطونة',
    price: '7,200 DH',
    location: 'الرباط، حي الرياض',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80',
    date: 'يوم واحد',
    featured: true,
    category: 'هواتف',
  },
  // سيارات
  {
    id: 4,
    title: 'Honda Civic 2018 للبيع',
    price: '145,000 DH',
    location: 'طنجة، مالاباطا',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    date: 'ساعتين',
    featured: true,
    category: 'سيارات',
  },
  // إلكترونيات
  {
    id: 7,
    title: 'MacBook Pro 2020 M1',
    price: '9,500 DH',
    location: 'مراكش، جليز',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    date: 'يوم واحد',
    featured: true,
    category: 'إلكترونيات',
  },
];

// قائمة جميع التصنيفات المنسدلة
const allCategories = [
  {
    title: 'هواتف ولوحات رقمية',
    items: ['هواتف نقالة', 'أكسسوارات', 'ساعات ذكية', 'لوحات رقمية (Tablets)'],
  },
  {
    title: 'طوموبيلات ومركبات',
    items: ['سيارات للبيع', 'قطع غيار', 'أكسسوارات السيارات', 'دراجات نارية'],
  },
  {
    title: 'عقارات',
    items: ['شقق للكراء', 'شقق للبيع', 'أراضي وبقع', 'مكاتب ومحلات تجارية'],
  },
  {
    title: 'خدمات',
    items: ['دروس ودعم', 'إصلاحات منزلية', 'نقل وشحن', 'تنظيف ومساعدة'],
  },
  {
    title: 'المنزل والديكور',
    items: ['أثاث وصالونات', 'أدوات المطبخ', 'ديكور وإضاءة', 'أجهزة منزلية'],
  },
];

function AllCategoriesDropdown({ open, onClose }) {
  const ref = useRef();
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  
  if (!open) return null;
  
  return (
    <div ref={ref} className="absolute right-0 left-0 z-30 mt-2 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-wrap gap-8 max-h-[420px] overflow-y-auto border border-gray-100">
        {allCategories.map((cat) => (
          <div key={cat.title} className="min-w-[180px] text-right">
            <div className="font-bold text-[#002f34] mb-2 border-b pb-1">{cat.title}</div>
            <ul className="space-y-1">
              {cat.items.map((item) => (
                <li key={item} className="text-[#002f34] hover:text-blue-600 hover:underline cursor-pointer text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const categoryStrip = [
  { name: 'هواتف نقالة', slug: 'mobiles' },
  { name: 'طوموبيلات', slug: 'cars' },
  { name: 'دراجات نارية', slug: 'motorcycles' },
  { name: 'ديور وشقق', slug: 'houses' },
  { name: 'تلفزات وأجهزة صوت', slug: 'video-audios' },
  { name: 'أراضي وبقع', slug: 'land-plots' },
];

export default function HomePage() {
  const router = useRouter();
  const [allCatOpen, setAllCatOpen] = useState(false);
  
  const handleCategoryClick = (category) => {
    router.push(`/category/${category.slug}`);
  };

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      
      {/* شريط التصنيفات العلوي */}
      <div className="w-full border-b bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto py-3 relative no-scrollbar">
            {/* زر جميع التصنيفات */}
            <div
              className="flex items-center font-bold text-[#002f34] whitespace-nowrap cursor-pointer relative gap-1 ml-4"
              onClick={() => setAllCatOpen((v) => !v)}
            >
              جميع التصنيفات
              <ChevronDown size={18} className={`transition-transform ${allCatOpen ? 'rotate-180' : ''}`} />
              <AllCategoriesDropdown open={allCatOpen} onClose={() => setAllCatOpen(false)} />
            </div>
            {/* أسماء التصنيفات السريعة */}
            <div className="flex items-center gap-6">
              {categoryStrip.map((cat) => (
                <span
                  key={cat.slug}
                  className="text-[#002f34] font-normal cursor-pointer whitespace-nowrap hover:underline text-sm"
                  onClick={() => handleCategoryClick({ slug: cat.slug })}
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BannerSlider />

      {/* قسم أيقونات التصنيفات */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
            تصفح حسب الأصناف
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.slug} 
                category={category} 
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* قسم الإعلانات حسب النوع */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* صف الهواتف */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">أحدث الهواتف</h2>
            <button className="text-blue-600 font-bold hover:underline">شوف كولشي</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recentAds.filter(ad => ad.category === 'هواتف').map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>

          {/* صف السيارات */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">طوموبيلات للبيع</h2>
            <button className="text-blue-600 font-bold hover:underline">شوف كولشي</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentAds.filter(ad => ad.category === 'سيارات').map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>
        </div>
      </section>

      {/* قسم دعوة للبيع (CTA) */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            عندك شي حاجة باغي تبيعها؟
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            حط إعلانك دبا فابور ووصلي لآلاف الكليان فالمغرب كامل
          </p>
          <button 
            className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-xl active:scale-95"
            onClick={() => router.push('/post-ad')}
          >
            نشر إعلان مجاني
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
