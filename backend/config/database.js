const mongoose = require('mongoose');

const connectDatabase = () => {
    // DB_LOCAL_URI
    mongoose.connect("mongodb://localhost:27017/",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;