import mongoose from 'mongoose'
import mediaModel from '../MediaSchema'
import requestPromise from 'request-promise'
var request = require('request');

export default (app) => {

// --data-urlencode 'To=+14063716193' \
// --data-urlencode 'From=+12062080324' \
// app.get('/sms/:number', function (req, res, next) {
//   var number = req.params.number;
//   req.mediaModel
//      .find({'time': number})
//      .sort({})
//      .exec(media => {req.application = media})
//   next()
// }, function (req, res) {
//     request({
//         url: 'https://api.twilio.com/2010-04-01/Accounts/AC969719a6985fb1747888cd39696f35e4/Messages', 
//         method: 'POST',
//         auth: {
//             user: 'AC969719a6985fb1747888cd39696f35e4',
//             pass: 'e4599595854761948593d9a665e46816'
//         },
//         form: {
//             //If ever I wanted to scale this I will have to restructure my code. 
//             From: '12062080324',
//             To: '14063716193',
//             Body: req.application
//         }
//     })
// })

// app.get('/sms/:number', function (req, res, next) {
//   var number = req.params.number;
//   req.mediaModel
//      .find({'time': number})
//      .sort({})
//      .exec(function(err, articles){
//          if (err || !articles.length){
//             console.log('there was a problem');
//             callback(err, null);
//         }else{
//             return request({
//                 url: 'https://api.twilio.com/2010-04-01/Accounts/AC969719a6985fb1747888cd39696f35e4/Messages', 
//                 method: 'POST',
//                 auth: {
//                     user: 'AC969719a6985fb1747888cd39696f35e4',
//                     pass: 'e4599595854761948593d9a665e46816'
//                 },
//                 form: {
//                     //If ever I wanted to scale this I will have to restructure my code. 
//                     From: '12062080324',
//                     To: '14063716193',
//                     Body: articles
//                 }
//             })
//         }
//     });
// });
// }

// keep an eye on the function names

//     // if ( !req.locals.media ) {
//     //     request({
//     //     url: 'https://api.twilio.com/2010-04-01/Accounts/AC969719a6985fb1747888cd39696f35e4/Messages', 
//     //     method: 'POST',
//     //     auth: {
//     //         user: 'AC969719a6985fb1747888cd39696f35e4',
//     //         pass: 'e4599595854761948593d9a665e46816'
//     //     },
//     //     form: {
//     //         //If ever I wanted to scale this I will have to restructure my code. 
//     //         From: '12062080324',
//     //         To: '14063716193',
//     //         Body: "test"
//     // }
//     // });
//     // }
//     request({
//         url: 'https://api.twilio.com/2010-04-01/Accounts/AC969719a6985fb1747888cd39696f35e4/Messages', 
//         method: 'POST',
//         auth: {
//             user: 'AC969719a6985fb1747888cd39696f35e4',
//             pass: 'e4599595854761948593d9a665e46816'
//         },
//         form: {
//             //If ever I wanted to scale this I will have to restructure my code. 
//             From: '12062080324',
//             To: '14063716193',
//             Body: res.locals.media
//     }
//     });
    
    
// });

// function smsFunction( req, res, next ) {
    
//     var number = req.params.number;
//     req.mediaModel
//             .find({'time': number})
//             .sort({})
//             .exec((err, media) => {
//                 res.locals.media = media;
//             })
//     // calls middleware2
//     next();
// }
app.get( '/sms/:number', (req, res) => {
var number = req.params.number;
    function getArticles() {
        console.log("agyaaa");
        return new Promise(function(resolve,reject) {
            return "Test Data"
        });
    }

    getArticles().then(function(data) {
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
                Body: "data"
            }
        });
    });
    })
}