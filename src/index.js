const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3727);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/channel', require('./routes/videos'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});