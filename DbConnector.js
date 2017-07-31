import mongoose from 'mongoose'

import MediaSchema from './MediaSchema'
export const connectDisconnect = (req, res, next) => {
    const connection = mongoose.createConnection(req.webtaskContext.secrets.MONGO_URL)
    req.mediaModel = connection.model('MediaItem', MediaSchema)
    req.on('end', () => {
        mongoose.connection.close()
    })
    next()
}