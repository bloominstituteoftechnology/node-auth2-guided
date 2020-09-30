
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          "id": 0,
          "user_id": 0,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 1,
          "user_id": 0,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/ILgo4FN.jpg"
        },
        {
          "id": 2,
          "user_id": 0,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
      ]);
    });
};
