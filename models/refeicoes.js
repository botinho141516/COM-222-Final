import mongoose from 'mongoose';

const OpcaoRefeicaoSchema = new mongoose.Schema({
  principal: [String],
  carnes: [String],
  acompanhamentos: [String],
}, { collection: 'refeicaocollection' });

export default mongoose.model('refeicaocollection', OpcaoRefeicaoSchema, 'refeicaocollection');
