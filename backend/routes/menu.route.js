const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/:id').delete((req, res) => {
  Menu.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Menu.find().sort({createdAt:-1})
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/breakfast').get((req, res) => {
  Menu.find({ menu_type: 'Breakfast' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lunch').get((req,res)=>{
  Menu.find({ menu_type: 'Lunch' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/dinner').get((req,res)=>{
  Menu.find({ menu_type: 'Dinner' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Menu.findById(req.params.id)
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const menu_name = req.body.menu_name;
  const menu_type = req.body.menu_type;
  const menu_price = req.body.menu_price;
  const menu_imglink = req.body.menu_imglink;

  const newMenu = new Menu({ menu_name, menu_type, menu_price, menu_imglink });

  newMenu.save()
    .then(() => res.json('New Menu added!'))
    .catch(err => res.status(400).json('Error: ' + err));


});

module.exports = router;