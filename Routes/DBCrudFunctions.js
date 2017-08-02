import mongoose from 'mongoose'

import mediaModel from '../MediaSchema'
// exports.getMediaItem = function getMediaItem(req, res, next) {
//     var number = req.params.number;
//         req.mediaModel
//             .find({'time': number})
//             .sort({})
//             .exec()
//             .then(res.json.bind(res))
//             .then(next);
// };
export default (app) => {

    app.get('/media', (req, res) => {
        req.mediaModel
            .find({})
            .sort({'url': -1})
            .exec((err, media) => res.json(media))
    })

    app.get('/media/:number', (req, res) => {
        var number = req.params.number;
        req.mediaModel
            .find({'time': number})
            .sort({})
            .exec((err, media) => res.json(media))
    })

    app.post('/media', (req, res) => {
        console.log("MEDIA: ", req.body)
        const newMedia = new req.mediaModel(Object.assign({},
            req.body,
            {'created_at': Date.now()}
        ))
        newMedia.save((err, media) =>{
            res.json(media)
        })
    })

    app.put('/media', (req, res) => {
        const idParam = req.webtaskContext.query_id
        req.mediaModel
            .findOne({_id: idParam}, (err, foundMedia) => {
                const updated = Object.assign({},
                    foundMedia,
                    req.body
                )
                updated.save((err, saved) => {
                    req.json(saved)
                })
            })
    })

    app.delete('/media', (req, res) => {
        const id = req.webtaskContext.query_id
        req.mediaModel
            .remove({_id: id}, (err, removed) => {
                res.json(removed)
            })
    })

}