
exports.up = function(knex) {
    return knex.schema.dropTableIfExists("profile")
    .alterTable("users", function(tbl){
        tbl.string("first")
        tbl.string("last")
        tbl.string("bio")
        tbl.string("imgUrl")
        tbl.string("profession")
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users");
  
};
