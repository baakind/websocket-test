const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 8080
});

// Callback argument is unique for each client
server.on('connection', (ws) => {
    console.log('Connection established');

    // Callback on message event
    ws.on('message', (data) => {
        console.log('Message received: ', data);

        // Send data to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});