import Contact from "../model/contact.model.js";
import User from "../model/user.model.js";


export const contactes = async (req,res)=>{
    try {
        const {fullname,email,message}= req.body;
       
       
        const createdMessage = new Contact({
            fullname:fullname,
            email:email,
            message:message,
        });
        await createdMessage.save();
        res.status(201).json({
            message: "Message created successfully",})


    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}