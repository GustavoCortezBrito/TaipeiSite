import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada nas variáveis de ambiente." },
        { status: 500 }
      );
    }
    
    const resend = new Resend(apiKey);
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailTo = process.env.EMAIL_TO || "contato@taipeicoffeehouse.com.br";
    // Nota: O remetente no Resend deve ser de um domínio verificado.
    // Enquanto estiver em teste, o Resend só permite enviar a partir de 'onboarding@resend.dev' para o próprio e-mail da conta cadastrada.
    const emailFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `☕ Novo contato no site: ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Novo Contato</title>
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #f7f5f2;
              color: #4a3e3d;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .wrapper {
              width: 100%;
              background-color: #f7f5f2;
              padding: 40px 20px;
              box-sizing: border-box;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid #e9e4dc;
            }
            .header {
              background-color: #A84544;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              font-size: 24px;
              margin: 0;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .header p {
              color: #f5dcdb;
              font-size: 14px;
              margin: 8px 0 0 0;
            }
            .content {
              padding: 40px 30px;
            }
            .section-title {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              color: #A84544;
              margin-bottom: 20px;
              font-weight: 700;
              border-bottom: 2px solid #f5dcdb;
              padding-bottom: 5px;
            }
            .info-grid {
              margin-bottom: 30px;
            }
            .info-row {
              display: flex;
              padding: 12px 0;
              border-bottom: 1px solid #f0ede8;
            }
            .info-label {
              width: 100px;
              font-weight: bold;
              color: #8c7674;
              font-size: 14px;
            }
            .info-value {
              flex: 1;
              color: #4a3e3d;
              font-size: 14px;
            }
            .info-value a {
              color: #A84544;
              text-decoration: none;
              font-weight: 500;
            }
            .message-box {
              background-color: #FAF8F5;
              border-left: 4px solid #A84544;
              padding: 20px;
              border-radius: 4px 12px 12px 4px;
              margin-top: 10px;
            }
            .message-text {
              font-size: 15px;
              line-height: 1.6;
              color: #4a3e3d;
              margin: 0;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #faf9f6;
              padding: 24px 30px;
              text-align: center;
              border-top: 1px solid #f0ede8;
            }
            .footer p {
              font-size: 12px;
              color: #a3908e;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <!-- Header -->
              <div class="header">
                <h1>Taipei Coffee House</h1>
                <p>Notificação de Novo Contato no Site</p>
              </div>
              
              <!-- Content -->
              <div class="content">
                <div class="section-title">Dados do Cliente</div>
                
                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Nome</span>
                    <span class="info-value"><strong>${name}</strong></span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">E-mail</span>
                    <span class="info-value"><a href="mailto:${email}">${email}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Telefone</span>
                    <span class="info-value">${phone ? `<a href="tel:${phone}">${phone}</a>` : "Não informado"}</span>
                  </div>
                </div>
                
                <div class="section-title">Mensagem Enviada</div>
                <div class="message-box">
                  <p class="message-text">${message}</p>
                </div>
              </div>
              
              <!-- Footer -->
              <div class="footer">
                <p>Este e-mail foi gerado automaticamente pelo site oficial da Taipei Coffee House.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
