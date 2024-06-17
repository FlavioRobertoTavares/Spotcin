import { Router } from 'express';
import { getUserByEmail } from '../services/userService';
import { sendRecoveryEmail } from '../services/emailService';

const router = Router();

router.post('/recover-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'Email not registered' });
    }

    await sendRecoveryEmail(email, user.password);
    res.status(200).json({ message: 'Password sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
