import express from 'express'

import { contactes } from '../controller/contact.controller.js'
const router = express.Router();

router.post('/contact', contactes);
export default router;