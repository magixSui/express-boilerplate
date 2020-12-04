const User = require('../../models/system/User');

async function getUser(user_id) {
  try {
    const user = await User
      .findOne({
        where: {
          user_id
        },
      });
    return user;
  } catch(err) {

  }
}
const userService = {
  getUser
};

module.exports = userService;
