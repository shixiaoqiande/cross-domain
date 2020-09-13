let express = require('express');
let app = express();

//npm install ws
let Websocket =require('ws');
let wss = new Websocket.Server({port:3000});
let arr = []

wss.on('connection',function(ws){
    ws.on('request',(request)=>{
      console.log(request)
    })

    ws.on('message',function(data){
      arr.push(data)
      console.log(arr)
      ws.send(JSON.stringify(arr))
      ws.emit('news',JSON.stringify(arr))
    })
})

