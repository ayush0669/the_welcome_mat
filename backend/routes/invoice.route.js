const router = require('express').Router();
let Invoice = require('../models/invoice.model');

router.route('/').get((req, res) => {
    Invoice.find().sort({createdAt:-1})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Invoice.find({userId: req.params.id})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {

    const userId=req.body.userId;
    const amount=req.body.amount;
    const newInvoice = new Invoice({userId,amount});

  newInvoice.save()
    .then(() => res.json('New User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').put((req, res) => {
  //var bill = new Invoice(req.body)
  Invoice.updateOne({userId: req.params.id},{amount:req.body.amount},function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
    
});

// router.route('/:id').put((req, res, next) => {
//   console.log(req.params.id);
//   Invoice.find({userId:req.params.id})
//     const userId=req.body.userId;
//     const amount=req.body.amount;
//     const newInvoice = new Invoice({userId,amount});

// newInvoice.save()
//   .then(() => res.json('New User added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });


// router.route('/:id/update').put((req, res, next) => {
//   console.log(req.params.id);
//   Invoice.findOneAndUpdate({userId:req.params.id},{amount:req.params.amount})
//   const userId=req.body.userId;
//   const amount=req.body.amount;
//   const newInvoice = new Invoice({userId,amount});

// newInvoice.save()
//   .then(() => res.json('New User added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });


module.exports = router;
