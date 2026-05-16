import { Resend } from 'resend';

// Initialisation de Resend avec ta clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // 1. Validation des paramètres requis
        if (!name || !email || !subject || !message) {
            return Response.json({ message: 'INVALID_PARAMETER' }, { status: 400 });
        }

        // 2. Validation du format de l'email
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) {
            return Response.json({ message: "EMAIL_SYNTAX_INCORRECT" }, { status: 400 });
        }

        // 3. Nettoyage du message (conversion des retours à la ligne en <br>)
        const contenu = message
            .replace(/\n/g, "<br>")
            .replace(/\r/g, "<br>")
            .replace(/\t/g, "<br>")
            .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // Sécurité XSS de base

        // 4. Envoi via le SDK Resend
        const { data, error } = await resend.emails.send({
            from: `Protection Nuisibles <${process.env.EMAIL_MASTER}>`,
            to: process.env.EMAIL_CLIENT,
            replyTo: email, // Permet de répondre directement au client en cliquant sur "Répondre"
            subject: `Protection Nuisibles - ${subject}`,
            text: `${name} (${email}) vous a contacté.\n\nVoici son message :\n\n${message}`,
            html: `
                <div style="font-family: sans-serif; color: #334155; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-bottom: 20px;">
                        Nouveau message de contact
                    </h2>
                    <p style="margin-bottom: 8px;"><strong>Nom :</strong> ${name}</p>
                    <p style="margin-bottom: 20px;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; color: #475569;">
                        ${contenu}
                    </div>
                </div>
            `,
        });

        // Si Resend renvoie une erreur spécifique à l'envoi
        if (error) {
            console.error("Resend API Error:", error);
            return Response.json({ message: "ERROR_WITH_RESEND", error }, { status: 500 });
        }

        return Response.json({ message: "EMAIL_SENDED_SUCCESSFULLY", id: data.id }, { status: 200 });

    } catch (error) {
        console.error("Global Server Error:", error);
        return Response.json({ 
            message: "SERVER_ERROR", 
            error: error.message 
        }, { status: 500 });
    }
}