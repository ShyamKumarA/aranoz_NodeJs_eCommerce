const mongoose=require('mongoose')

const connectDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/aranoz");

}
connectDb()


module.exports = connectDb