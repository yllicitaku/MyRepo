const bookshelf = require('../knex');

const User = bookshelf.Model.extend({
    tableName: 'users',

    likes: function () {
        return this.hasMany('Like', 'user_id');
      },
});

module.exports = User;