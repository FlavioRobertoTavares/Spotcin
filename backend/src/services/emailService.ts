import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email-do-user@gmail.com',
        pass: 'senha-do-user'
    }
});

export const sendRecoveryEmail = async (to: string, password: string) => {
    const mailOptions = {
        from: 'email-do-user@gmail.com',
        to,
        subject: 'Recuperação da Senha',
        text: `

        Abaixo segue a sua senha. 

        A sua senha é: ${password}

        Por favor, por questão de segurança, ao logar, mude a sua senha o mais rápido possível.
        
        `
    };

    await transporter.sendMail(mailOptions);
};