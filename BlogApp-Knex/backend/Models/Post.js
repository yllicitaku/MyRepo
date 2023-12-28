const bookshelf = require('../knex');
const User = require('./User');

const Post = bookshelf.model('Post', {
    tableName: 'posts',
    hasTimestamps: true,

    user: function () {
        return this.belongsTo('User', 'user_id');
    },

    likes: function () {
        return this.hasMany('Like', 'post_id');
      },
});

module.exports = Post;
