const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      database : 'localdb'
    }
  });

  const bookshelf = require('bookshelf')(knex);
  // bookshelf.plugin('registry');
  
  module.exports = bookshelf;

