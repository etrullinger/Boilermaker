const db = require('./db');
const User = require('./User');
const Puppy = require('./Puppy');

User.hasMany(Puppy, { as: 'puppies' });
Puppy.belongsTo(User, { as: 'user' });

module.exports = {
  db,
  User,
  Puppy,
};