const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })

    const supportRouter = require('./routes/support.route');
    const laundaryRouter = require('./routes/laundary.route');
    const internetRouter = require('./routes/internet.route');
    const housekeepingRouter = require('./routes/housekeeping.route');
    const userRouter = require('./routes/user.route');
    const menuRouter = require('./routes/menu.route');
    const foodRouter = require('./routes/foodorder.route');
    const invoiceRouter = require('./routes/invoice.route');
    
    app.use('/support', supportRouter);
    app.use('/laundary', laundaryRouter);
    app.use('/internet', internetRouter);
    app.use('/housekeeping', housekeepingRouter);
    app.use('/user', userRouter);
    app.use('/menu', menuRouter);
    app.use('/foodorder',foodRouter);
    app.use('/invoice',invoiceRouter);
        
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});