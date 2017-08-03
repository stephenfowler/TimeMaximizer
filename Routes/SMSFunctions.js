import mongoose from 'mongoose'
import mediaModel from '../MediaSchema'
var request = require('request');

export default (app) => {
app.get( '/sms/:number', (req, res) => {
    var number = req.params.number;
    var TWILIO_SID = req.webtaskContext.secrets.TWILIO_SID;
    var TWILIO_AUTH_TOKEN = req.webtaskContext.secrets.TWILIO_AUTH_TOKEN;
    var PHONE_FROM = req.webtaskContext.secrets.TWILIO_AUTH_TOKEN;
    var PHONE_TO = req.webtaskContext.secrets.TWILIO_AUTH_TOKEN;

    req.mediaModel
        .find({'time': number})
        .exec((error, results) => {
            var arrayUrls = [];
            results.forEach((element) =>{arrayUrls.push(element.url)})
            request({
                url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_SID + '/Messages', 
                method: 'POST',
                auth: {
                    user: TWILIO_SID,
                    pass: TWILIO_AUTH_TOKEN
                },
                form: {
                    From: '12062080324',
                    To: '14063716193',
                    Body: "You learning articles for your " + number + " minute time are " + arrayUrls
                }
            })
        }
        )
    })
}