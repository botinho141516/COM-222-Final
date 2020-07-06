import mongoose from 'mongoose';

const PedidosSchema = new mongoose.Schema({
  refeicoes: [{
    principal: [String],
    carnes: [String],
    acompanhamentos: [String],
  }],
  bebida: [String],
  sobremesa: [String],
  valorTotal: Number,
}, { collection: 'pedidocollection' });

export default mongoose.model('pedidocollection', PedidosSchema, 'pedidocollection');
