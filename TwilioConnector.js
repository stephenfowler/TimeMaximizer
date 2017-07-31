'use latest';
import twilio from 'twilio';
module.exports = (context, cb) => {
  // POST a json object with at least the following properties.
  const { body, to_number, from_number } = context.data;
  const { TWILIO_SID, TWILIO_AUTH_TOKEN } = context.secrets;
  var client = new twilio.RestClient(TWILIO_SID, TWILIO_AUTH_TOKEN);
  client.messages.create({
    body,
    to_number,
    from_number
  }, (err, message) => {
    if (err) return cb(err);
    cb(null, message);
  });
};