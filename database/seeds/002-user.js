
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 0,
          username: "jbravo",
          password: "jamjam",
          first: "Johnny",
          last: "Bravo",
          imgUrl: "https://i.imgur.com/U8BJNqU.jpg",
          bio: "I am THE Johnny Bravo. Wanna see me comb my hair, really fast? Hit me up and I'll show you",
          profession: "Barber",
          location: "Metropolis"
        }
      ]);
    });
};
