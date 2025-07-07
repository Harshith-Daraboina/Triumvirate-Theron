"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('message', (message) => {
        const msg = message.toString();
        console.log(`Received: ${msg}`);
        if (msg === 'ping') {
            socket.send('pong');
            console.log('Sent: pong');
        }
        else {
            // Echo the message back to the client
            socket.send(`Echo: ${msg}`);
            console.log(`Echoed: ${msg}`);
        }
        setInterval(() => {
            socket.send(Math.random().toString(36).substring(7)); // Send a random string every 5 seconds
        }, 5000);
    });
    socket.on('close', () => {
        console.log('Client disconnected');
    });
    socket.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});
console.log('WebSocket server running on ws://localhost:8080');
