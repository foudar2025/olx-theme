'use client';

import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // إذا كان هناك صفحة واحدة فقط، لا داعي لعرض شريط التنقل
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center mt-12 mb-8" dir="rtl">
      <ul className="inline-flex -space-x-px">
        {/* زر الصفحة السابقة */}
        <li>
          <button
            className="px-4 py-2 rounded-r-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="الصفحة السابقة"
          >
            السابق
          </button>
        </li>

        {/* أرقام الصفحات */}
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`px-4 py-2 border border-gray-300 transition-all ${
                page === currentPage 
                  ? 'bg-blue-600 text-white font-bold border-blue-600' 
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* زر الصفحة التالية */}
        <li>
          <button
            className="px-4 py-2 rounded-l-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="الصفحة التالية"
          >
            التالي
          </button>
        </li>
      </ul>
    </nav>
  );
}
