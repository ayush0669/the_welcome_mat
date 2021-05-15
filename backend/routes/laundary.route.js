const router = require('express').Router();
let Laundary = require('../models/Laundary.model');

router.route('/').get((req, res) => {
    Laundary.find().sort({createdAt:-1})
    .then(laundary => res.json(laundary))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Laundary.find({userId: req.params.id}).sort({createdAt:-1})
    .then(laundry => res.json(laundry))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const userId = req.body.userId;
  
    const laundaryclothCount = Number(req.body.laundaryclothCount);
    const laundarySlot = req.body.laundarySlot;
  
    const laundaryTask = req.body.laundaryTask;
    const status = req.body.status;
  
    const newLaundary = new Laundary({userId, laundaryclothCount, laundarySlot, laundaryTask, status });
  
    newLaundary.save()
    .then(() => res.json('Laundry record added'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Laundary.findById(req.params.id)
      .then(laundarys => {
  
        laundarys.status = "Completed";
  
  
        laundarys.save()
          .then(() => res.json('Status updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;