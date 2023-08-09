const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

function encode(payload, expirePeriod=3600) {
  const token = jwt.sign(
    {
      ...payload,
      exp: Math.floor(Date.now() / 1000) + expirePeriod
    },
    JWT_SECRET_KEY
  );
  return token;
}

function decode(token) {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return null; // Invalid token or expired token
  }
}

function decodeExpiredToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET_KEY, { ignoreExpiration: true });
  } catch (error) {
    return null; // Invalid token
  }
}

module.exports = {
  encode,
  decode,
  decodeExpiredToken
};
