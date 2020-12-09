const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    firstName:  String,
    secondName: String,
    email: String,
    phone: String,
    url: String,
    utms: String,
    date: { type: Date, default: Date.now },
});