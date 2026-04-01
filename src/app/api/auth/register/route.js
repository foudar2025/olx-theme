export async function POST(request, env) {
  try {
    const { email, password } = await request.json();
    
    // الربط الصحيح لبيئة Workers هو تمرير env كمعامل ثانٍ للدالة
    const db = env.DB;

    if (!db) {
      return new Response(JSON.stringify({ success: false, error: "فشل الربط بالقاعدة" }), { status: 500 });
    }

    const id = crypto.randomUUID();

    // تنفيذ أمر الإدخال
    await db.prepare(
      "INSERT INTO users (id, email, password) VALUES (?, ?, ?)"
    )
    .bind(id, email, password)
    .run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("D1 Error:", error.message);
    // هذا هو الخطأ الذي يظهر لك في المتصفح حالياً
    return new Response(JSON.stringify({ 
      success: false, 
      error: "البريد موجود مسبقاً أو هناك مشكلة في البيانات" 
    }), { status: 400 });
  }
}
