const router = require('express').Router();
let FoodOrder = require('../models/foodorder.model');

router.route('/').get((req, res) => {
  FoodOrder.find().sort({createdAt:-1})
    .then(foodorders => res.json(foodorders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  FoodOrder.find({userId: req.params.id}).sort({createdAt:-1})
    .then((foodorders) => res.json(foodorders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/breakfast').get((req, res) => {
  Menu.find({ food_type: 'Breakfast' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lunch').get((req,res)=>{
  Menu.find({ food_type: 'Lunch' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/dinner').get((req,res)=>{
  Menu.find({ food_type: 'Dinner' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const food_name = req.body.food_name;
  const food_type = req.body.food_type;
  const food_price = Number(req.body.food_price);
  const status = req.body.status;
  
  const newOrder = new FoodOrder({userId, food_name, food_type, food_price, status});

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  FoodOrder.findById(req.params.id)
    .then(foodo => {

      foodo.status = "Completed";


      foodo.save()
        .then(() => res.json('Status updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;