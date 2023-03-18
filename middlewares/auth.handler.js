const boom = require('@hapi/boom');

function checkRoles(roles) {
  return (req, res, next) => {
    const { user } = req;
    const filtro = roles.findIndex((rol) => rol === user.role[0]);
    if (filtro >= 0) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = checkRoles;
