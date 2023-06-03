//using http module (inbuilt given by node) we can setup a basic server
const http =require('http');

const PORT =3000;
/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input 
 * Now inside the callback , we get two arguments
 * - request -> this argument contains all the details about the incoming request
 * -response -> this asgument contains functions using which we can prepare the response
 * 
 * the createServer function returns us the server object
 * 
 */
const server =http.createServer(function exec(request,response){

    console.log(request.method);
    response.end("Hello world")
});

server.listen(PORT,function process(){

    /**
     * once the server has started then this callback function will be executed
     */
    console.log("Server started on port",PORT);
});
