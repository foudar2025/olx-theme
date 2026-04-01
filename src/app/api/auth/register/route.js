import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // استقبال البيانات من واجهة الموقع
    const { email, password } = await request.json();
    
    // الربط مع قاعدة البيانات D1 (تأكد أن الاسم DB مطابق لما في wrangler.toml)
    const { env } = request; 
    
    const id = crypto.randomUUID();

    // إدخال بيانات المستخدم الجديد في الجدول الذي أنشأته
    await env.DB.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return NextResponse.json({ success: true, message: "تم تسجيل الحساب في BoostMe!" });
  } catch (error) {
    // في حال كان البريد مسجلاً مسبقاً أو حدث خطأ تقني
    return NextResponse.json(
      { success: false, error: "البريد الإلكتروني موجود مسبقاً أو هناك مشكلة في الاتصال" },
      { status: 400 }
    );
  }
}
