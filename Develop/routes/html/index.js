const router = require('express').Router();

// GET /
router.get('/', (req, res) => {
  res.json('Successful response sent');
})

// GET *
router.get('*', (req, res) => {
  res.json('Successful response sent');
})


// This API route is a GET Route for retrieving all the tips
// tips.get('/', (req, res) => {
//   console.info(`${req.method} request received for tips`);
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
// });

// // This API route is a POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//   console.info(`${req.method} request received to add a tip`);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuid(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully 🚀`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });

module.exports = router;