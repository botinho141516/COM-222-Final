import express from 'express';
import Refeicao from './Refeicao';
import Pedidos from './Pedidos';

const router = express.Router();

router.use(Refeicao);
router.use(Pedidos);

export default router;
