const router = require('express').Router();
let Support = require('../models/support.model');

router.route('/').get((req, res) => {
  Support.find().sort({createdAt:-1})
    .then(support => res.json(support))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Support.find({userId: req.params.id}).sort({createdAt:-1})
    .then(support => res.json(support))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const userId= req.body.userId;
  const furtherdetails = req.body.furtherdetails;
  const status=req.body.status;
  const data= req.body.data;
  const newSupport = new Support({userId,status,data,furtherdetails});

  newSupport.save()
    .then(() => res.json('Support query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Support.findById(req.params.id)
    .then(supports => {

      supports.status = "Completed";


      supports.save()
        .then(() => res.json('Status updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
