import express from 'express';
import Pedidos from '../controllers/Pedidos';

const router = express.Router();

router.post('/pedido', Pedidos.create);
router.get('/pedido/:id', Pedidos.get);

export default router;
