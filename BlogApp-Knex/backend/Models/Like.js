const bookshelf = require('../knex');

const Like = bookshelf.model('Like', {
  tableName: 'likes',
  hasTimestamps: true,

  user: function () {
    return this.belongsTo('User', 'user_id');
  },

  post: function () {
    return this.belongsTo('Post', 'post_id');
  },
});


module.exports = Like;
