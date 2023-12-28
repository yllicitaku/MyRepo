const knex = require('../knex');

// DELETE function
async function deleteUserById(userId){
    const result = await knex('users').where('id', userId).del();
    return result > 0;
}

module.exports = {deleteUserById}