import mongoose from 'mongoose';
import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default async (req, res) => {
  const { id } = req.params;
  const { principal, carne, acompanhamento } = req.body;

  if (mongoose.Types.ObjectId.isValid(id)) {
    Refeicoes.updateOne({ _id: id }, {
      principal,
      carne,
      acompanhamento,
    }, (updateErr) => {
      if (updateErr) sendError(res, updateErr);
      else {
        Refeicoes.findById(id, (err, doc) => {
          if (err) sendError(res, err);
          else {
            sendSuccess(res, doc);
          }
        });
      }
    });
  } else {
    sendError(res, new Error('Formato de Id incorreto'), 400);
  }
};
