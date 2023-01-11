const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5500 });

wss.on("connection", ws => {
    console.log("Client has connected");

    ws.on("message", data => {
        console.log(`Client has sent: ${data}`);
         
        wss.clients.forEach( (client) => {
            client.send(data);
        });

    });

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});