import { Router } from 'express';
import { getUserByEmail } from '../services/userService';
import { sendRecoveryEmail } from '../services/emailService';

const router = Router();

import { Router } from 'express';
import PasswordRecoveryController from '../controllers/passwordRecovery';

const router = Router();

router.post('/recover-password', passwordRecoveryController.recoverPassword);

export default router;

