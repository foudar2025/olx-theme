import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json(); 
    const { env } = request;

    // توليد ID فريد يدوياً لأن D1 قد يحتاجه كـ TEXT
    const id = crypto.randomUUID();

    // تحديد أسماء الأعمدة بدقة لتجنب التضارب مع created_at
    await env.DB.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return NextResponse.json({ success: true, message: "تم تسجيل الحساب!" });
  } catch (error) {
    console.error("D1 Error:", error);
    return NextResponse.json(
      { success: false, error: "البريد موجود مسبقاً أو هناك مشكلة في البيانات" },
      { status: 400 }
    );
  }
}
