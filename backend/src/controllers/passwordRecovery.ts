import { Request, Response } from 'express';
import { getUserByEmail } from '../services/userService';
import { sendRecoveryEmail } from '../services/emailService';

class passwordRecoveryController {
  static async recoverPassword(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const user = await getUserByEmail(email);

      if (!user) {
        return res.status(404).json({ message: 'Email não registrado' });
      }

      await sendRecoveryEmail(email, user.password);
      res.status(200).json({ message: 'Senha enviado para o seu e-mail' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default passwordRecoveryController;
