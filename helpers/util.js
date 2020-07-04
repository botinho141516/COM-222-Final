export const sendSuccess = (res, data, statusCode = 200) => res.json({
  status: 'ok',
  data,
  statusCode,
});

export const sendError = (res, error, statusCode = 500) => res.json({
  status: 'error',
  error,
  statusCode,
});
