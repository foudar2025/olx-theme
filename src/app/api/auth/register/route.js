import { NextResponse } from 'next/server';

// ملاحظة: حذفنا سطر export const runtime = 'edge' هنا حلًا للخطأ
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // في OpenNext و Cloudflare Pages، يتم الوصول لـ D1 عبر request.context
    // أو مباشرة عبر env إذا تم تمريره
    const env = request.env || request.context?.env;
    const db = env?.DB;

    if (!db) {
      console.error("Database 'DB' not found in env");
      return NextResponse.json({ success: false, error: "قاعدة البيانات غير متصلة" }, { status: 500 });
    }

    const id = crypto.randomUUID();

    await db.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return NextResponse.json({ success: true, message: "تم التسجيل بنجاح!" });
  } catch (error) {
    console.error("D1 Error:", error.message);
    return NextResponse.json(
      { success: false, error: "البريد موجود مسبقاً أو هناك خطأ تقني" },
      { status: 400 }
    );
  }
}
