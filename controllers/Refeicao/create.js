import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default (req, res) => {
  const {
    principal, carne, acompanhamento,
  } = req.body;

  Refeicoes.create({
    principal, carne, acompanhamento,
  }, (err, doc) => {
    if (err) sendError(res, err);
    else {
      sendSuccess(res, doc);
    }
  });
};
