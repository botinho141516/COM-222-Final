import express from 'express';
import Refeicao from '../controllers/Refeicao';

const router = express.Router();

router.post('/refeicao', Refeicao.create);
router.get('/refeicao/:id', Refeicao.get);
router.put('/refeicao/:id', Refeicao.update);
router.delete('/refeicao/:id', Refeicao.remove);

export default router;
