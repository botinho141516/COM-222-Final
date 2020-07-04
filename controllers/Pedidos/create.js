import Pedidos from '../../models/pedidos';
import { sendError, sendSuccess } from '../../helpers/util';

export default (req, res) => {
  const {
    refeicoes, bebida, sobremesa, valorTotal,
  } = req.body;

  Pedidos.create({
    refeicoes, bebida, sobremesa, valorTotal,
  }, (err, doc) => {
    if (err) sendError(res, err);
    else {
      sendSuccess(res, doc);
    }
  });
};
