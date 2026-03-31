"use client";

import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';

// تصنيفات تناسب السوق المغربي
const categories = [
  { value: '', label: 'اختار القسم' },
  { value: 'vehicles', label: 'سيارات ومركبات' },
  { value: 'property', label: 'عقارات' },
  { value: 'electronics', label: 'إلكترونيات وأجهزة منزلية' },
  { value: 'fashion', label: 'ملابس وموضة' },
  { value: 'games', label: 'ألعاب وترفيه' },
  { value: 'kids', label: 'مستلزمات الأطفال' },
  { value: 'services', label: 'خدمات' },
];

export default function PostAdPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    location: '',
    price: '',
  });
  const [images, setImages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
    // هنا يمكن إرسال البيانات إلى قاعدة البيانات لاحقاً
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">نشر إعلان مجاني</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          {/* عنوان الإعلان */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">عنوان الإعلان</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
              placeholder="مثلاً: آيفون 13 نقي للبيع"
              required
            />
          </div>

          {/* الوصف */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">وصف المنتج</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
              placeholder="احكي لينا كتر على الحالة، المواصفات، وسبب البيع..."
              rows={4}
              required
            />
          </div>

          {/* القسم والحالة */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">القسم</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                required
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">الحالة</label>
              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                required
              >
                <option value="">اختار الحالة</option>
                <option value="new">جديد (Emballé)</option>
                <option value="used">مستعمل</option>
              </select>
            </div>
          </div>

          {/* الموقع والثمن */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">المدينة</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
                placeholder="مثلاً: الدار البيضاء، المعاريف"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">الثمن (درهم)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <ImageUploader images={images} setImages={setImages} />

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg active:scale-95"
          >
            معاينة الإعلان قبل النشر
          </button>
        </form>

        {/* قسم المعاينة (Preview) */}
        {showPreview && (
          <div className="mt-8 bg-white rounded-2xl shadow-md p-8 border-2 border-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">معاينة الإعلان</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-wrap gap-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border shadow-sm"
                  />
                ))}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-blue-600">{form.title}</h3>
                <p className="text-gray-700 leading-relaxed">{form.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-bold">القسم:</span> {categories.find(c => c.value === form.category)?.label}</div>
                  <div><span className="font-bold">الحالة:</span> {form.condition === 'new' ? 'جديد' : 'مستعمل'}</div>
                  <div><span className="font-bold">المدينة:</span> {form.location}</div>
                  <div className="text-lg font-bold text-green-600 font-mono">{form.price} DH</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                onClick={() => setShowPreview(false)}
              >
                تعديل الإعلان
              </button>
              <button
                className="flex-2 bg-green-600 text-white px-10 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md shadow-green-200"
              >
                تأكيد ونشر الإعلان
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
