export async function POST(req) {
  try {
    const body = await req.json();

    const otp = Math.floor(1000 + Math.random() * 9000);

    return Response.json({
      success: true,
      phone: body.phone,
      otp,
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "خطا در ارسال کد",
      },
      {
        status: 500,
      },
    );
  }
}
