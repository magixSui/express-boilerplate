var bcrypt = require('bcryptjs');

const bcryptService = () => {
  const encrypt = (str) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(str, salt);

    return hash;
  };

  const compare = (str, hash) => (
    bcrypt.compareSync(str, hash)
  );

  return {
    encrypt,
    compare,
  };
};

module.exports = bcryptService;
