
exports.up = function(knex) {
    return knex.schema
    .createTable('clients', tbl => {
      tbl.increments();
      tbl.text('client_name');
      tbl.text('service');
      tbl.text('client_ImgUrl');
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        // .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("clients");
  
};
