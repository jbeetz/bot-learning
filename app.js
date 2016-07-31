var restify = require('restify');
var builder = require('botbuilder');

//bot setup

//restify server

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening  to %s', server.name, server.url);
    });

//create chatbot

var connector = new builder.Chat.Connector({
    appid: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_PASSWORD
    });
    var bot = new builder.UniversalBot(Connector);
    server.post('/api/messages', connector.listen());

//bot dialogs

bot.dialog('/', function (session) {
session.send('Hello World!');
});