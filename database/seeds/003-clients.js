
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
          "client_ImgUrl": "https://i.imgur.com/PmVHgFS.jpg"
        },
        {
          "id": 3,
          "user_id": 1,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/cX7ccxK.jpg"
        },
        {
          "id": 4,
          "user_id": 1,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/CQaZyta.jpg"
        },
        {
          "id": 5,
          "user_id": 1,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/Nqq8Te4.jpg"
        },
        {
          "id": 6,
          "user_id": 2,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/ILgo4FN.jpg"
        },
        {
          "id": 7,
          "user_id": 2,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 8,
          "user_id": 2,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/RPDgUMm.jpg"
        },
        {
          "id": 9,
          "user_id": 3,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/ILgo4FN.jpg"
        },
        {
          "id": 10,
          "user_id": 3,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/CQaZyta.jpg"
        },
        {
          "id": 11,
          "user_id": 3,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 12,
          "user_id": 4,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/MRDpqHj.jpg"
        },
        {
          "id": 13,
          "user_id": 4,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 14,
          "user_id": 4,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/RPDgUMm.jpg"
        },
        {
          "id": 15,
          "user_id": 5,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/ILgo4FN.jpg"
        },
        {
          "id": 16,
          "user_id": 5,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 17,
          "user_id": 5,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/RPDgUMm.jpg"
        },
        {
          "id": 18,
          "user_id": 6,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 19,
          "user_id": 6,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/MRDpqHj.jpg"
        },
        {
          "id": 20,
          "user_id": 6,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/hZdkwdC.jpg"
        },
        {
          "id": 21,
          "user_id": 7,
          "client_name": "Jarvis",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/0egAGWj.jpg"
        },
        {
          "id": 22,
          "user_id": 7,
          "client_name": "Vision",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/CQaZyta.jpg"
        },
        {
          "id": 23,
          "user_id": 7,
          "client_name": "Wanda",
          "service": "blow out",
          "client_ImgUrl": "https://i.imgur.com/PmVHgFS.jpg"
        },
        
      ]);
    });
};
