
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
        },
        {
          id: 1,
          username: "pcbh",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/PXeqdsH.jpg",
          first: "Princess Consuela",
          last: "Hammock",
          profession: "Cosmetologist",
          location: "Washington",
          bio:
            "Hello, If you are interested in any of my services please consult with me if you are a new customer.",
        },
        {
          id: 2,
          username: "mscof",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/ILgo4FN.jpg",
          first: "Michael",
          last: "Scofield",
          profession: "Barber",
          location: "Chicago",
          bio:
            "I specialize in the sickest fades out here in Chi town. Check me out",
        },
        {
          id: 3,
          username: "adamgirl",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/DjNO3KI.jpg",
          first: "Wednesday",
          last: "Addams",
          profession: "Nail Tech",
          location: "Montana",
          bio: "Nails everyone? Come through, I'll pamper you like crazy",
        },
        {
          id: 4,
          username: "cmerry",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/gHcpx9R.jpg",
          first: "Cindy",
          last: "Merrywether",
          profession: "Colorist",
          location: "Metropolis",
          bio:
            "My duty is to enhance your outer beauty and make you look even more fabulous",
        },
        {
          id: 5,
          username: "dragonTat",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/FI3NTFC.jpg",
          first: "Lisbeth",
          last: "Salander",
          profession: "Makeup Artist",
          location: "LA",
          bio: "Makeup can help you capture a moment. ~ Carine Roitfeld",
        },
        {
          id: 6,
          username: "bbarnes",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/gCFZiyD.jpg",
          first: "Bucky",
          last: "Barnes",
          profession: "Loctician",
          location: "Metropolis",
          bio: "Quality service for an affordable price ",
        },
        {
          id: 7,
          username: "lcage",
          password: "2020mess",
          imgUrl: "https://i.imgur.com/sjpQ78p.jpg",
          first: "Luke",
          last: "Cage",
          profession: "Salon/Spa Owner",
          location: "Orlando",
          bio:
            "I specialize in enhancing your health to upgrade your beauty. ",
        },
      
      ]);
    });
};
