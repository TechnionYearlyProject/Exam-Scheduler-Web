const bcrypt = require('bcryptjs');

module.exports = {
  enable: true,
  secret: 'darksideofthemoon',
  admin_default: {
    name: 'Administrator',
    email: 'admin@technion.ac.il',
    password: bcrypt.hashSync('Aa123456', 12)
  }
};
