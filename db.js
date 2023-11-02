import mongoose from "mongoose";

export const db= async()=>{
    try {
        mongoose.connect("mongodb+srv://aldairtorres507:chepe31278@cluster0.1fbto0o.mongodb.net/practica2_rpm")
    } catch (error) {
        console.log(error)
    }
}