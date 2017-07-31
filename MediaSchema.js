import mongoose from 'mongoose'

export default new mongoose.Schema({
    url: String,
    time: Number,
    id: mongoose.Schema.ObjectId
})