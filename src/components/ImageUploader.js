'use client';

import React, { useRef } from 'react';
import { Camera, X, Plus } from 'lucide-react';

export default function ImageUploader({ images, setImages }) {
  const fileInputRef = useRef();

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    // كنزيدو التصاور الجداد على القدام
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (idx) => {
    // كنمسحو التصويرة اللي اختار الكليان
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="w-full" dir="rtl">
      <label className="block text-gray-800 font-bold mb-3 text-md">
        صور المنتج (زيد صور واضحة باش تبيع دغيا)
      </label>
      
      <div className="flex flex-wrap gap-3 mb-4">
        {/* عرض الصور اللي تختارو */}
        {images.map((img, idx) => (
          <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
            <img
              src={typeof img === 'string' ? img : URL.createObjectURL(img)}
              alt="Preview"
              className="object-cover w-full h-full"
            />
            <button
              type="button"
              onClick={() => removeImage(idx)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
              aria-label="مسح الصورة"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {/* زر إضافة صورة جديدة (+) */}
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl text-blue-500 bg-blue-50 hover:bg-blue-100 hover:border-blue-500 transition-all group"
        >
          <Camera size={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] mt-1 font-bold">إضافة صورة</span>
        </button>
      </div>

      {/* Input المخفي اللي كيفتح الكاميرا أو الغاليري */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleFiles}
      />
      
      {images.length > 0 && (
        <p className="text-[10px] text-gray-500 italic">
          * تقدر تزيد صور أخرى أو تمسح اللي ما عجباتكش.
        </p>
      )}
    </div>
  );
}
