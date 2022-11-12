const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

//
const dotenv = require('dotenv')

const errorMiddleware = require('./middlewares/errors')

// app.use(express.json())
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(cookieParser())
// app.use(fileUpload());

app.use(express.json({limit: '50mb'}));

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

app.use(cookieParser());

app.use(fileUpload())



// Setting up config file
// if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'config/config.env' })
// dotenv.config({ path: 'SHOPIT_SERVER/config/config.env' })
dotenv.config({ path: 'config/config.env' });


//import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const order = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app




////////////////////////


// const express = require('express');
// const app = express();

// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
// const fileUpload = require('express-fileupload')
// // const dotenv = require('dotenv');
// const path = require('path')

// const errorMiddleware = require('./middlewares/errors')

// // Setting up config file 
// if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'config/config.env' })
// // dotenv.config({ path: 'backend/config/config.env' })

// app.use(express.json({limit: '50mb'}));

// app.use(bodyParser.json({limit: '50mb'}));

// app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

// app.use(cookieParser());

// app.use(fileUpload())


// // Import all routes
// const products = require('./routes/product');
// const auth = require('./routes/auth');
// const payment = require('./routes/payment');
// const order = require('./routes/order');


// app.use('/api/v1', products);
// app.use('/api/v1', auth);
// app.use('/api/v1', payment);
// app.use('/api/v1', order);

// // if (process.env.NODE_ENV === 'PRODUCTION') {
// //     app.use(express.static(path.join(__dirname, '../shop-it/build')))

// //     app.get('*', (req, res) => {
// //         res.sendFile(path.resolve(__dirname, '../shop-it/build/index.html'))
// //     })
// // }


// // Middleware to handle errors
// app.use(errorMiddleware);

// module.exports = app
