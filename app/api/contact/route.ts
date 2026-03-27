import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      formType,
      name,
      email,
      company,
      website,
      plan,
      message,
      trialGoal,
      resellerType,
    } = body ?? {};

    if (!formType || !name || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Missing RESEND_API_KEY or CONTACT_EMAIL environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safe = {
      formType: escapeHtml(String(formType ?? "")),
      name: escapeHtml(String(name ?? "")),
      email: escapeHtml(String(email ?? "")),
      company: escapeHtml(String(company ?? "")),
      website: escapeHtml(String(website ?? "")),
      plan: escapeHtml(String(plan ?? "")),
      message: escapeHtml(String(message ?? "")),
      trialGoal: escapeHtml(String(trialGoal ?? "")),
      resellerType: escapeHtml(String(resellerType ?? "")),
    };

    const subject =
      safe.formType === "trial"
        ? `New Free Trial Request — ${safe.name}`
        : `New Reseller Application — ${safe.name}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">${subject}</h2>
        <p><strong>Form Type:</strong> ${safe.formType}</p>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company || "-"}</p>
        <p><strong>Website / Profile:</strong> ${safe.website || "-"}</p>
        <p><strong>Plan Interest:</strong> ${safe.plan || "-"}</p>
        <p><strong>Trial Goal:</strong> ${safe.trialGoal || "-"}</p>
        <p><strong>Reseller Type:</strong> ${safe.resellerType || "-"}</p>
        <p><strong>Message:</strong><br>${safe.message ? safe.message.replaceAll("\n", "<br>") : "-"}</p>
      </div>
    `;

    await resend.emails.send({
      from: "Reece AI <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: safe.email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
