import mongoose from 'mongoose';

const uri = "mongodb+srv://luizreboucas03:1234@cluster0.co4qvma.mongodb.net/biblioteca-facil";

mongoose.connect(uri);

let db = mongoose.connection

export default db
