const horaMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');

  req.horaActual = hours
  req.horaTotal = `${hours}:${minutes}`
  next();
}

module.exports = horaMiddleware;