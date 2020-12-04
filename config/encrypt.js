const bcryptService = require('../src/services/bcrypt.service');
console.log(bcryptService().encrypt(process.argv.slice(2)[0]));