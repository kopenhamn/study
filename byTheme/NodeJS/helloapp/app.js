// const http = require('http');
//
// http.createServer(function(request,response) {
//     response.end("Hello NodeJS");
// }).listen(3000, "127.0.0.1", function() {
//     console.log("server started listening on port 3000");
// });
const os = require("os");
const greeting = require("./greeting");

// получим имя текущего пользователя
let userName = os.userInfo().username;


console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
