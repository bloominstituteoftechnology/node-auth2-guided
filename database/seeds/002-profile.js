
exports.seed = async function(knex) {
  // Deletes ALL existing entries
      return knex('profile').insert([
        {first:"Lisbet", last:"Salander", bio: 'Girl with the dragon Tatoo', profession:"Hair dresser", user_id: 1},

      ]);
  
};
