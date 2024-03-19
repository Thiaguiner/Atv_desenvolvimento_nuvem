import mongoose from 'mongoose';

const sellSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books'
    },
    date: {
        type: Date,
        default: Date.now
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Sell = mongoose.model('sells', sellSchema)
export default Sell;