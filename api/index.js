const express = require('express');
const router = express.Router();

const data = {
  data: [
    {
      'id': 1,
      'name': 'Camille',
      'tel': '0639'
    }, {
      'id': 2,
      'name': 'Paul',
      'tel': '0640'
    }, {
      'id': 3,
      'name': 'Clément',
      'tel': '0641'
    }, {
      'id': 4,
      'name': 'Sonny',
      'tel': '0642'
    }
  ]
};

// Hardcoded data
router.get('/users', (req, res) => {
  res.send(data);
});

//TO DO

// Data from the db

// const User = require('../model/User');
// router.get('/users', (req, res) => {
//   User.find({}).then(eachOne => {
//     res.json(eachOne);
//   });
// });

// POST User
// server.post('/api/users', (req, res) => {
//   User.create({
//     name: req.body.name,
//     tel: req.body.tel
//   }).then(user => {
//     res.json(user);
//   });
// });


// router.get('/users/:userId', (req, res) => {
//
// });

module.exports = router;
