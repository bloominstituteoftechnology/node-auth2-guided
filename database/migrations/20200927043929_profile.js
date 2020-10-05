
exports.up = function(knex) {
    return knex.schema
    .createTable('profile', tbl => {
      tbl.increments();
      tbl.text('profession');
      tbl.text('bio');
      tbl.text('profileImgUrl');
      tbl.text('first')
      tbl.text('last')
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
    .dropTableIfExists("profile");
  
};
