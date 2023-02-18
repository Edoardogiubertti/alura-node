import mongoose from "mongoose";

mongoose.connect("mongodb+srv://eduardo:123@alura.5g1ncgm.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db