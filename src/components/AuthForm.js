'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AuthForm({ mode = 'login', onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (mode === 'register' && !form.name.trim()) errs.name = 'الاسم الكامل ضروري';
    if (!form.email.trim()) errs.email = 'البريد الإلكتروني ضروري';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'بريد إلكتروني غير صحيح';
    if (!form.password) errs.password = 'كلمة السر ضرورية';
    else if (form.password.length < 6) errs.password = 'كلمة السر خاص يكون فيها على الأقل 6 حروف';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    
    setSubmitting(true);
    
    try {
      // إرسال البيانات إلى الـ API الذي أنشأناه في Cloudflare
      const endpoint = mode === 'register' ? '/api/auth/register' : '/api/auth/login';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(mode === 'register' ? 'مبروك! تم إنشاء حسابك في BoostMe بنجاح.' : 'مرحباً بك من جديد!');
        if (onSubmit) onSubmit(form);
      } else {
        alert(data.error || 'حدث خطأ، تأكد من البيانات ديالك');
      }
    } catch (error) {
      alert('خطأ في الاتصال بالسيرفر. تأكد أنك رفعت التعديلات (Deploy)');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-2xl p-10 mt-12 mb-8 border border-blue-50" dir="rtl">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
        {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {mode === 'login' ? 'مرحباً بعودتك لـ BoostMe!' : 'انضم لأكبر منصة إعلانات فالمغرب.'}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-right">
        {mode === 'register' && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 outline-none bg-gray-50 text-gray-800`}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1 mr-2">{errors.name}</div>}
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 outline-none bg-gray-50 text-gray-800`}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1 mr-2">{errors.email}</div>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="كلمة السر"
            value={form.password}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.password ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 outline-none bg-gray-50 text-gray-800`}
          />
          {errors.password && <div className="text-red-500 text-sm mt-1 mr-2">{errors.password}</div>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg shadow-md transition-all disabled:opacity-50 active:scale-95"
        >
          {submitting ? 'جاري التحميل...' : (mode === 'login' ? 'دخل للحساب' : 'إنشاء الحساب')}
        </button>
      </form>

      <div className="mt-8 text-center border-t pt-6">
        {mode === 'login' ? (
          <p className="text-gray-600">
            ماعندكش حساب؟{' '}
            <Link href="/auth/register" className="text-blue-600 hover:underline font-bold">سجل دبا</Link>
          </p>
        ) : (
          <p className="text-gray-600">
            عندك حساب ديجا؟{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-bold">دخل من هنا</Link>
          </p>
        )}
      </div>
    </div>
  );
}
