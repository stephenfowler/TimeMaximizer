# Time Maximizer
Welcome to my time maximizer project. This project is an attempt to help manage time in an effort to maximize learning in small windows of time. 
An example is if you know you want to learn about starting a business in your state you might load up the database with small and large web articles
about how to get a business setup in your state. The time maximizer will then send you links to those articles based on a set of triggers (time, and status in slack).
For example at 2:30 it might send you a list of articles via sms that are 30+ minute long reads. Another example is that in the morning you might post
"/me brb" in slack and the maximizer be notified and would send you a list of really short articles 10+ minutes long to read. Likewise you might post 
"I'm done for today" in slack and the maximizer would send you some 30+ minute articles for your commute home. 

The above is the end goal. Right now it just has a database that can be loaded with a post or put request. The structure being url, and time. 
It will right now send you all 15 minute articles at 2:43. 
You can also have it send you a list of artrilces of your length of choosing by manually hitting 
<your-webtask>timeMaximizer/sms/<your-desired-time>.

To setup this webtask you need the following secrets: 
```
MONGO_URL=mongodb://<mongo-DB-user>:<mongo-db-user-password></mongo-db-user-password>@ds129003.mlab.com:29003/<your-mongo-db>
TWILIO_SID=<your-twilio-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token> 
PHONE_FROM=<your-twilio-sending-phone-number> 
PHONE_TO=<your-phone-number>
```

I recommend creating a "secrets file" and then using the web task cli tool like so: 
`wt create index --secrets-file secrets.txt --bundle`

To load the Database you need a request similar to:
```
POST /timeMaximizer/media HTTP/1.1
Host: <your-webtask-url>
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: 50141e8c-4cd9-73c3-5559-6d24b8099ab3

url=https://auth0.com/blog/auth0-webtasks-the-quickest-of-all-quick-starts/&time=15
```

This is a work in progress and is a space for me to remedy my lack of experience in Node.js. 
My Todo list for this project are as follows:
1. Slack integration so it will send you articles based on your status.
2. Better time scheduling.
3. A managment UI for adding, removing and editing articles in the db.
4. A way to tell it which articles you have read.
5. An integration with pocket or possible evernote so that when you save an article for later it will add it to the db.
6. A rough way to determine how long it will take to read an article.
7. Add tests and restructure the code or perhaps just switch over to my "Take 2" version located at https://github.com/stephenfowler/time-maximizer.

If you have suggestions or a really cool idea please feel free to post on it in github. 
