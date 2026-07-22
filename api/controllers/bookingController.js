/**
 * Essa função controla o fluxo de ação de busca de todos as reservas.
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function getBookings({ req, res }) {
  res.send({ ok: 'ok' });
}

module.exports = {
  getBookings,
};
