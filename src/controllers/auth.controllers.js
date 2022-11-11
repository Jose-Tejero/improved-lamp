const AuthService = require('../services/auth.services');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    result ?
      res.status(200).json({ message: 'Logueado exitosamente' })
      :
      res.status(401).json({ message: 'Contraseña inválida' });
  } catch (error) {
    next({
      message: 'Algo salió mal con la autenticación',
      status: 401,
      errorContent: error,
    })
  }
};

module.exports = {
  userLogin,
};