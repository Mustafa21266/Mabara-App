const mongoose = require('mongoose');

const connectDatabase = () => {
    // DB_LOCAL_URI
    mongoose.connect("mongodb://127.0.0.1:27017/myLocalDatabase",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;