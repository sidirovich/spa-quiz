const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:  String,
    password: String,
    email: String,
    phone: String,
    balance: Number,
    userlevel: Number,
    date: { type: Date, default: Date.now },
});

/*
    types:
        - 'banner'
        - 'orders'
        - 'quiz'
*/

const WidgetSchema = new Schema({
    type: String,
    name: String,
    url: String,
});

const QuestSchema = new Schema({
    type: String,
    position: Number,
    name: String,
    answers: [{ name: String }],
});

const AnswerSchema = new Schema({
    name: String,
});

const clientTransactionSchema = new Schema({
    userID: String,
    transactionID: String,
    receiptID: String,
    dateTransfer: Date,
});

const userModel = mongoose.model('User', userSchema);
const widgetModel = mongoose.model('Widget', WidgetSchema);
const questModel = mongoose.model('Quest', QuestSchema);
const answerModel = mongoose.model('Answer', AnswerSchema);

module.exports = {
    userModel,
    widgetModel,
    questModel,
    answerModel,
}