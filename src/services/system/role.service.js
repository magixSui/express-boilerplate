const Role = require('../../models/system/Role');

function getAll(user) {
  try {
    let roles = [];
    if (user.isAdmin(user)) {
      roles.push('admin');
    } else {

    }
    return roles;
  } catch(err) {
    return res.status(500).json({ msg: 'Internal server error' });
  }
}
const roleService = {
  getAll
};

module.exports = roleService;
