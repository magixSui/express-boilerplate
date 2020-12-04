
const User = require('../../models/system/User');
const authService = require('../../services/system/auth.service');
const bcryptService = require('../../services/system/bcrypt.service');
const tokenService = require('../../services/system/token.service');
const roleService = require('../../services/system/role.service'); 
const HttpResult = require('../../models/system/HttpResult');
const HttpStatus = require('../../models/system/HttpStatus');
const { mapToObj } = require('../../utils'); 

const UserController = () => {

  const register = async (req, res) => {
    const { body } = req;

    if (body.password === body.password2) {
      try {
        const user = await User.create({
          email: body.email,
          password: body.password,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, data: user, code: 200 });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const login = async (req, res) => {
    const axios = HttpResult.success();
    const { user_name, password } = req.body;
    if (user_name && password) {
      try {
        const user = await User
          .findOne({
            where: {
              user_name,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().compare(password, user.password)) {
          const token = authService().issue({ id: user.user_id });
          // return res.status(200).json({ token, msg: '操作成功', code: 200 });
          axios.set('token', token);
          return res.json(mapToObj(axios));
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ msg: 'Bad Request: user_name or password is wrong' });
  };

  const info = async (req, res) => {
    const user = await tokenService.getLoginUser(req);
    const roles = roleService.getAll(user);
    if (!user) {
      return res.status(400).json({ msg: 'Bad Request: User not found' });
    }
    return res.status(200).json({ user, roles, msg: '操作成功', code: 200 });
  };
  return {
    login,
    register,
    info
  };
};

module.exports = UserController;