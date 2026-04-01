'use client';

import React from 'react';
import AdCard from './AdCard';

export default function DashboardTabs({
  activeTab,
  myAds = [],
  savedAds = [],
  stats = { active: 0, sold: 0 },
  onEditAd,
  onDeleteAd,
}) {
  // قسم الإحصائيات (لوحة التحكم)
  if (activeTab === 'dashboard') {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8" dir="rtl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">إحصائياتي</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="flex-1 bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-4xl font-extrabold text-blue-700">{stats.active}</div>
            <div className="text-gray-700 font-medium mt-2">إعلانات نشطة</div>
          </div>
          <div className="flex-1 bg-green-50 rounded-2xl p-6 text-center border border-green-100">
            <div className="text-4xl font-extrabold text-green-700">{stats.sold}</div>
            <div className="text-gray-700 font-medium mt-2">إعلانات مباعة</div>
          </div>
        </div>
      </div>
    );
  }

  // قسم إعلاناتي
  if (activeTab === 'my-ads') {
    return (
      <div dir="rtl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">إعلاناتي</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAds.map((ad) => (
            <div key={ad.id} className="relative group">
              <AdCard ad={ad} />
              {/* أزرار التحكم تظهر عند تمرير الفأرة */}
              <div className="absolute top-3 right-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => onEditAd(ad)} 
                  className="flex-1 bg-yellow-400 text-white px-3 py-2 rounded-lg font-bold text-xs shadow-sm hover:bg-yellow-500 transition-colors"
                >
                  تعديل
                </button>
                <button 
                  onClick={() => onDeleteAd(ad)} 
                  className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-xs shadow-sm hover:bg-red-600 transition-colors"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
        {myAds.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-2xl text-gray-500">
            لم تقم بنشر أي إعلان بعد.
          </div>
        )}
      </div>
    );
  }

  // قسم الإعلانات المحفوظة
  if (activeTab === 'saved-ads') {
    return (
      <div dir="rtl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">الإعلانات المحفوظة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedAds.length === 0 ? (
            <div className="text-gray-500 col-span-full text-center py-12 bg-gray-50 rounded-2xl">
              لا توجد إعلانات محفوظة حالياً.
            </div>
          ) : (
            savedAds.map((ad) => <AdCard key={ad.id} ad={ad} />)
          )}
        </div>
      </div>
    );
  }

  // قسم الإعدادات
  if (activeTab === 'settings') {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8" dir="rtl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">الإعدادات</h2>
        <div className="p-12 border-2 border-dashed border-gray-100 rounded-2xl text-center text-gray-400">
          نموذج إعدادات الحساب سيكون متوفراً قريباً...
        </div>
      </div>
    );
  }

  return null;
}
