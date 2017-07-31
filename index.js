import Express from 'express'
import Webtask from 'webtask-tools'
import bodyParser from 'body-parser'

import {connectDisconnect} from './DbConnector'
import mediaRoutes from './CrudFunctions'
import Twilio from './TwilioConnector'
import Axios from 'axios';

const app = Express()

app.use(bodyParser.urlencoded({urlencoded: false}))
app.use(bodyParser.json())

app.use(connectDisconnect)
mediaRoutes(app)

module.exports = Webtask.fromExpress(app)

module.exports = function(context, cb) {
    //const { body, to_number, from_number } = context.data;
    // let body = "Simple Test for connectivity";
    // let to_number = '1-406-371-6193';
    // let from_number = '1-206-208-0324'; 
    // let ctx = {
    //     'body':body,
    //     'to_number':to_number,
    //     'from_number':from_number    
    // }

    Twilio(context, cb);
}   