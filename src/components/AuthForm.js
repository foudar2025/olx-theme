'use client';

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
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
    await new Promise((r) => setTimeout(r, 1000)); // fake delay
    setSubmitting(false);
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 mt-12 mb-8 border border-blue-100" dir="rtl">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
        {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {mode === 'login' ? 'مرحباً بعودتك! سجل الدخول للحساب ديالك.' : 'مرحباً بيك! صاوب حسابك فثواني.'}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-right">
        {mode === 'register' && (
          <div>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="الاسم الكامل"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800 outline-none`}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1 mr-2">{errors.name}</div>}
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800 outline-none`}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1 mr-2">{errors.email}</div>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            placeholder="كلمة السر"
            value={form.password}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.password ? 'border-red-400' : 'border-gray-200'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800 outline-none`}
          />
          {errors.password && <div className="text-red-500 text-sm mt-1 mr-2">{errors.password}</div>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition-all disabled:opacity-60 active:scale-95"
        >
          {submitting ? 'جاري التحميل...' : (mode === 'login' ? 'دخل للحساب' : 'تسجيل')}
        </button>
      </form>

      <div className="mt-6 text-center">
        {mode === 'login' ? (
          <span className="text-gray-600">ماعندكش حساب؟{' '}
            <Link href="/auth/register" className="text-blue-600 hover:underline font-bold">سجل دبا</Link>
          </span>
        ) : (
          <span className="text-gray-600">عندك حساب ديجا؟{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-bold">دخل من هنا</Link>
          </span>
        )}
      </div>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="mx-4 text-gray-400 font-medium">أو</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-blue-400 text-gray-700 font-bold py-3 rounded-xl shadow-sm transition-all active:scale-95">
          <FcGoogle className="w-6 h-6" /> كمل باستعمال Google
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-sm transition-all active:scale-95">
          <FaFacebook className="w-6 h-6" /> كمل باستعمال Facebook
        </button>
      </div>
    </div>
  );
}
