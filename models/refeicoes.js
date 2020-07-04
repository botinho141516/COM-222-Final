import mongoose from 'mongoose';

const OpcaoRefeicaoSchema = new mongoose.Schema({
  principal: [String],
  carne: [String],
  acompanhamento: [String],
}, { collection: 'refeicaocollection' });

export default mongoose.model('refeicaocollection', OpcaoRefeicaoSchema, 'refeicaocollection');
