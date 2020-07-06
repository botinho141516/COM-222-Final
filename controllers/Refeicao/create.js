import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default (req, res) => {
  const {
    principal, carnes, acompanhamentos,
  } = req.body;

  Refeicoes.create({
    principal, carnes, acompanhamentos,
  }, (err, doc) => {
    if (err) sendError(res, err);
    else {
      sendSuccess(res, doc);
    }
  });
};
