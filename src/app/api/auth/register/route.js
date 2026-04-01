import { NextResponse } from 'next/server';

export const runtime = 'edge'; // تأكيد تشغيل الكود على Edge Runtime

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // محاولة الحصول على قاعدة البيانات من عدة مصادر محتملة
    const db = request.env?.DB || process.env.DB;

    if (!db) {
      throw new Error("Database binding 'DB' not found");
    }

    const id = crypto.randomUUID();

    await db.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration Error:", error.message);
    return NextResponse.json(
      { success: false, error: "فشل الاتصال بقاعدة البيانات أو البريد مستخدم" },
      { status: 500 }
    );
  }
}
