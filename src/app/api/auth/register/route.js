import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password, name } = await request.json(); // استلام الاسم أيضاً
    const { env } = request;

    // توليد ID فريد
    const id = crypto.randomUUID();

    // تحديد الأعمدة بدقة لتجنب تضارب مع created_at
    await env.DB.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return NextResponse.json({ success: true, message: "تم تسجيل الحساب في BoostMe!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "البريد موجود مسبقاً أو هناك مشكلة في البيانات" },
      { status: 400 }
    );
  }
}
