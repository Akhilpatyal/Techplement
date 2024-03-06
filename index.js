// main 
const express=require("express")
const path = require("path");
// mongodb
const { connectToMongoDB } = require("./connect");
// const router=express.Router();
const app=express();
// mongodb
connectToMongoDB(process.env.MONGODB ?? 'mongodb://localhost:27017/user-register').then(() =>
  console.log("Mongodb connected")
);
// 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

const userRoute=require('./router/router');
const staticRoute=require('./router/static_router');

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("/user",userRoute);
app.use('/',staticRoute)

app.listen(800,()=>{
    console.log("your app is listening");
})