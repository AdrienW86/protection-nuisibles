import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true, // true pour le port 465
        auth: {
            user: process.env.EMAIL_USER, // votre adresse email pro
            pass: process.env.EMAIL_PASS, // votre mot de passe (ou mot de passe d'app)
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_CLIENT,
            replyTo: email,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        });

        return Response.json({ message: "Succès" }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Erreur", error }, { status: 500 });
    }
}