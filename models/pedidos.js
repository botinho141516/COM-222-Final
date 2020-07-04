import mongoose from 'mongoose';

const PedidosSchema = new mongoose.Schema({
  refeicoes: [{
    principal: String,
    carne: String,
    acompanhamento: String,
  }],
  bebida: [String],
  sobremesa: [String],
  valorTotal: Number,
}, { collection: 'pedidocollection' });

export default mongoose.model('pedidocollection', PedidosSchema, 'pedidocollection');
