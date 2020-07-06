import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default async (req, res) => {
  Refeicoes.findOne({}).sort({ _id: -1 }).exec((err, doc) => {
    console.log(err);
    if (err) sendError(res, err);
    else {
      sendSuccess(res, doc);
    }
  });
};
