import mongoose from 'mongoose'
import mediaModel from '../MediaSchema'
import bluebird from 'bluebird'
//var requestPromise = require('request-promise');
var request = bluebird.promisifyAll(require('request'));


export default (app) => {
app.get( '/sms/:number', (req, res) => {
    var number = req.params.number;
    var data = "";
    return req.mediaModel
        .find({'time': number})
        .exec()
        .then((data) => {
            request({
                url: 'https://api.twilio.com/2010-04-01/Accounts/AC969719a6985fb1747888cd39696f35e4/Messages', 
                method: 'POST',
                auth: {
                    user: 'AC969719a6985fb1747888cd39696f35e4',
                    pass: 'e4599595854761948593d9a665e46816'
                },
                form: {
                    //If ever I wanted to scale this I will have to restructure my code. 
                    From: '12062080324',
                    To: '14063716193',
                    Body: data
                }
            })  
        })
        .then((data) => res.send(200))
    })
}