import mongoose from 'mongoose';
import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    Refeicoes.findOne({ _id: id }, (err, doc) => {
      if (err) sendError(res, err);
      else {
        sendSuccess(res, doc);
      }
    });
  } else {
    sendError(res, new Error('Formato de Id incorreto'), 400);
  }
};
