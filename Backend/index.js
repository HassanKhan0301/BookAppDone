import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors";


import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"


dotenv.config();
const app = express();
 app.use(cors());
 app.use(express.json());



const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


// Connect mongose
try {
    mongoose.connect(URI,{
        useNewUrlparser:true,
        useUnifiedTopology: true
    });
    console.log("Connected to MangoDb");

} catch (error) {
    console.log("error:",error);
}

app.use("/book",bookRoute );
app.use("/user",userRoute);
app.use('/contact',contactRoute);






app.listen(PORT,()=>{
    console.log(`Example App running ${PORT}`);
});

