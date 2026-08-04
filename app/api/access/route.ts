import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type AccessPayload = {
  name?: string;
  email?: string;
  date?: string;
  problems?: string[];
  audience?: string;
  weddingsPerYear?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: AccessPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const date = (data.date ?? "").trim();
  const problems = Array.isArray(data.problems)
    ? data.problems.filter((p) => typeof p === "string").slice(0, 12)
    : [];
  const audience = (data.audience ?? "").trim().slice(0, 60);
  const weddingsPerYear = (data.weddingsPerYear ?? "").trim().slice(0, 40);

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const to = process.env.ACCESS_TO ?? user;

  // Not configured yet → tell the client so it can fall back to a mailto.
  if (!host || !user || !pass) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const problemsText = problems.length
    ? problems.map((p) => `  • ${p}`).join("\n")
    : "  (não indicado)";

  const text =
    `Novo pedido de acesso ao Wedding OS\n\n` +
    `Perfil: ${audience || "-"}\n` +
    (weddingsPerYear ? `Casamentos por ano: ${weddingsPerYear}\n` : "") +
    `Nome: ${name}\n` +
    `Email: ${email}\n` +
    `Data do casamento: ${date || "-"}\n\n` +
    `O que procuram resolver:\n${problemsText}\n`;

  const subjectTag = audience ? `[${audience}] ` : "";

  try {
    await transporter.sendMail({
      from: `"Wedding OS · Acesso" <${user}>`,
      to,
      replyTo: email,
      subject: `${subjectTag}Pedido de acesso: ${name}`,
      text,
    });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
