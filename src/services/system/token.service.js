// const authService = require('./auth.service');
const userService = require('./user.service');
const jwt = require('jsonwebtoken');
function getLoginUser(req) {
  return new Promise((resolve, reject) => {
    let user = null;
    let token = req.header('X-Token');
    if (token) {
      jwt.verify(token, 'secret', (err, data) => {
        user = userService.getUser(data.id);
        resolve(user);
      });
    }
  });
}
const tokenService = {
  getLoginUser
};

module.exports = tokenService;
