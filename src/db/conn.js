const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/ashish";
mongoose.set('strictQuery', true);
mongoose.connect(url).then(() => {
    console.log("Connected Database Succesfully...");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});