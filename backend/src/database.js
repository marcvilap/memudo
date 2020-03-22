const mongoose = require('mongoose');
const URI =process.env.MONGONDB_URI ? process.env.MONGONDB_URI : 'mongodb://localhost/memudo-database';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
});

const connection = mongoose.connection;

connection.once ('open', ()=>{
    console.log('DB is connected');
});