import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    gender: {
        type: String,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Books = mongoose.model('books', booksSchema);

export default Books;