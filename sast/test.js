const jwt = require('jsonwebtoken');

const payload = {
  user: 'admin',
  role: 'admin'
};

const token = jwt.sign(payload, 'secret', { algorithm: 'none' });

console.log(token);