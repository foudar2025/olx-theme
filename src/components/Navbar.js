'use client';

import React, { useState } from 'react';
import { Menu, X, User, Plus, ChevronDown, Search, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// الأصناف المترجمة
const categoryIcons = [
  { name: 'سيارات', slug: 'motors' },
  { name: 'عقارات', slug: 'property' },
  { name: 'هواتف', slug: 'electronics' },
];

const locations = [
  'المغرب كامل', 'الدار البيضاء', 'الرباط - سلا', 'مراكش', 'طنجة', 'أكادير', 'فاس', 'مكناس', 'وجدة', 'القنيطرة',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('المغرب كامل');
  const router = useRouter();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* الشعار والقائمة الجانبية للموبايل */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div 
              className="text-2xl font-bold text-blue-600 cursor-pointer flex items-center" 
              onClick={() => router.push('/')}
            >
              BoostMe
            </div>
          </div>

          {/* محرك البحث (نسخة الحاسوب) */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 gap-0 border-2 border-gray-900 rounded overflow-hidden">
            <div className="relative w-1/3 border-l-2 border-gray-900">
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pr-8 pl-4 py-2 focus:outline-none appearance-none bg-white font-medium"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <Search className="absolute right-2 top-2.5 text-gray-500" size={18} />
            </div>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="قلب على سيارات، هواتف، عقارات..." 
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="absolute left-0 top-0 bottom-0 px-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* أزرار الدخول و "بيع وشري" */}
          <div className="flex items-center gap-3">
            <Link 
              href="/auth/login" 
              className="hidden sm:flex items-center gap-2 font-bold text-gray-900 hover:underline px-2"
            >
              <User size={20} />
              <span>دخول</span>
            </Link>
            
            {/* تم تغيير المسار هنا من /post إلى /post-ad ليتطابق مع مجلداتك */}
            <Link 
              href="/post-ad"
              className="flex items-center gap-2 bg-white border-4 border-t-yellow-400 border-l-blue-500 border-r-red-500 border-b-green-500 px-4 py-1 rounded-full font-bold shadow-sm hover:scale-105 transition-all"
            >
              <Plus size={20} />
              <span>بيع وشري</span>
            </Link>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <div className="py-3 border-b border-gray-100 font-bold text-gray-800">الأقسام الرئيسية</div>
            {categoryIcons.map((cat) => (
              <Link 
                key={cat.name} 
                href={`/category/${cat.slug}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg text-right text-gray-700"
              >
                {cat.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link 
                href="/auth/login"
                className="flex items-center gap-2 w-full py-3 px-4 bg-gray-100 rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={20} />
                <span>تسجيل الدخول</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* شريط الأقسام السريع (نسخة الحاسوب) */}
      <div className="hidden lg:flex bg-gray-50 border-b border-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 items-center text-sm font-semibold text-gray-700">
          <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            جميع الأصناف <ChevronDown size={16} />
          </span>
          {categoryIcons.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/category/${cat.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
