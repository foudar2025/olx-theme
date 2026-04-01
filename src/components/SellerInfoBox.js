'use client';

import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function SellerInfoBox({ seller }) {
  // ملاحظة: تأكد من تمرير بيانات البائع كـ props عند استدعاء المكون
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6" dir="rtl">
      <h3 className="text-xl font-bold mb-5 text-gray-900 border-b pb-3">معلومات البائع</h3>
      
      {/* اسم البائع */}
      <div className="mb-4 flex items-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold ml-3">
          {seller?.name?.charAt(0).toUpperCase() || 'ب'}
        </div>
        <span className="font-bold text-lg text-gray-800">{seller?.name || 'بائع BoostMe'}</span>
      </div>

      {/* رقم الهاتف */}
      <div className="mb-3 flex items-center text-gray-700 hover:text-blue-600 transition-colors">
        <Phone className="w-5 h-5 ml-3 text-gray-400" />
        <span className="font-medium text-right" dir="ltr">{seller?.phone || 'غير متوفر'}</span>
      </div>

      {/* البريد الإلكتروني */}
      <div className="mb-6 flex items-center text-gray-700 hover:text-blue-600 transition-colors">
        <Mail className="w-5 h-5 ml-3 text-gray-400" />
        <span className="font-medium text-right">{seller?.email || 'لا يوجد بريد'}</span>
      </div>

      {/* زر الدردشة */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95">
        <MessageCircle className="w-5 h-5" />
        تواصل مع البائع
      </button>

      {/* نصيحة أمان (اختياري لكن مفيد للمشاريع التجارية) */}
      <p className="mt-4 text-[10px] text-gray-400 text-center leading-relaxed">
        تجنب دفع أي مبالغ قبل معاينة المنتج. BoostMe لا يطلب منك الدفع مسبقاً.
      </p>
    </div>
  );
}
