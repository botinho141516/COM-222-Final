import express from 'express';
import Refeicao from '../controllers/Refeicao';

const router = express.Router();

router.post('/refeicao', Refeicao.create);
router.get('/refeicao', Refeicao.get);

export default router;
