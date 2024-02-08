const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidRoute=require("./controllers/covidRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://hemanth22:hemanth22@cluster0.oxkdocr.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/covid",covidRoute)

app.listen(3004,()=>{
    console.log("server running")
})