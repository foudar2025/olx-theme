'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          
          {/* عن الموقع */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">BoostMe</h3>
            <p className="text-gray-300 mb-4">
              سوقك الموثوق لبيع وشراء كل ما تحتاجه في المغرب. هميزات جيرة وبكل سهولة.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-semibold mb-4 border-b border-gray-700 pb-2">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">من نحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">كيفاش كيخدم الموقع؟</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">نصائح الأمان</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">تواصل معنا</a></li>
            </ul>
          </div>

          {/* المساعدة والقوانين */}
          <div>
            <h4 className="font-semibold mb-4 border-b border-gray-700 pb-2">الدعم والخصوصية</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">شروط الاستخدام</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">سياسة ملفات الارتباط</a></li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="font-semibold mb-4 border-b border-gray-700 pb-2">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span dir="ltr">+212 6XX-XXXXXX</span>
              </div>
              <div className="flex items-center text-gray-300 gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@boostme.ma</span>
              </div>
            </div>
          </div>

        </div>

        {/* الحقوق السفلى */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BoostMe. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
