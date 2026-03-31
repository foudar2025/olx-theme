'use client';

import React, { useState } from 'react';
import { Menu, X, User, Plus, ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

// مصفوفة الأصناف بالدارجة المغربية
const categoryIcons = [
  {
    name: 'سيارات',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F3F6FC"/>
        <path d="M8 22h16M10 18l2-6h8l2 6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="22" r="2" fill="#222"/>
        <circle cx="20" cy="22" r="2" fill="#222"/>
      </svg>
    ),
  },
  {
    name: 'عقارات',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F3F6FC"/>
        <path d="M8 20v-6l8-6 8 6v6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="16" width="8" height="6" rx="1" fill="#222"/>
      </svg>
    ),
  },
  {
    name: 'هواتف',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F3F6FC"/>
        <path d="M12 6h8a2 2 0 012 2v16a2 2 0 01-2 2h-8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#222" strokeWidth="1.5"/>
        <path d="M15 22h2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// المدن المغربية الكبرى
const locations = [
  'المغرب كامل',
  'الدار البيضاء',
  'الرباط - سلا',
  'مراكش',
  'طنجة',
  'أكادير',
  'فاس',
  'مكناس',
  'وجدة',
  'القنيطرة',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('المغرب كامل');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* الشعار والقائمة */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => router.push('/')}>
              BoostMe
            </div>
          </div>

          {/* محرك البحث (النسخة المكتبية) */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 gap-2">
            <div className="relative w-1/3">
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-8 pr-4 py-2 border-2 border-gray-900 rounded focus:outline-none appearance-none bg-white"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <Search className="absolute left-2 top-2.5 text-gray-500" size={20} />
            </div>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="قلب على سيارات، هواتف، عقارات..." 
                className="w-full px-4 py-2 border-2 border-gray-900 rounded focus:outline-none"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-gray-900 text-white rounded-r">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* أزرار الدخول وبيع وشري */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 font-bold hover:underline">
              <User size={20} />
              <span>دخول</span>
            </button>
            <button 
              className="flex items-center gap-2 bg-white border-4 border-t-yellow-400 border-l-blue-500 border-r-red-500 border-b-green-500 px-4 py-1 rounded-full font-bold shadow-sm hover:shadow-md transition-all"
              onClick={() => router.push('/post')}
            >
              <Plus size={20} />
              <span>بيع وشري</span>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الأصناف تحت النافبار */}
      <div className="hidden lg:flex bg-white border-b border-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 items-center text-sm font-medium">
          <span className="font-bold flex items-center gap-1 cursor-pointer">
            جميع الأصناف <ChevronDown size={16} />
          </span>
          {categoryIcons.map((cat) => (
            <span key={cat.name} className="hover:text-blue-600 cursor-pointer">{cat.name}</span>
          ))}
        </div>
      </div>
    </nav>
  );
}
