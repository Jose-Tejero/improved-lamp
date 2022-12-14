const jwt = require('jsonwebtoken');

const authVerification = (req, res, next) => {
  try {
    const { userId } = req.params;
    let token = req.headers.authorization;
    token = token.replace('Bearer ', '');
    const isValid = jwt.verify(token, 'todoemlo', { algorithm: 'HS512' });
    console.log(isValid);
    const { id } = isValid;
    if (isValid) {
      next();
    }
  } catch (error) {
    next({
      message: 'No se pudo verificar el token',
      status: 400,
      errorContent: error,
    })
  }
};

module.exports = authVerification;