import Refeicoes from '../../models/refeicoes';
import { sendError, sendSuccess } from '../../helpers/util';

export default (req, res) => {
  const { id } = req.params;

  Refeicoes.findByIdAndDelete(id, (err, doc) => {
    if (err) sendError(res, err);
    else {
      sendSuccess(res, doc);
    }
  });
};
