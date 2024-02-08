const mongoose=require("mongoose")
const covidSchema = new mongoose.Schema({
    name:String,
    mobile_number:String,
    address:String,
    symptoms:String,
    status:String

})

module.exports=mongoose.model("covid",covidSchema)