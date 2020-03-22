const express = require('express');
const cors = require('cors');
const app = express();

//setings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());


//routes

app.use('/api/users', require('./routes/users'))
app.use('/api/removals', require('./routes/removals'))
app.use('/api/products', require('./routes/products'))


module.exports = app ;