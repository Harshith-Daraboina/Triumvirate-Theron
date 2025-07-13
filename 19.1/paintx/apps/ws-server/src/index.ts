import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Send welcome message
  ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to server' }));
  
  ws.on('message', (data) => {
    const message = JSON.parse(data.toString());
    console.log('Received:', message);
    
    // Echo message back to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify({
          type: 'message',
          data: message,
          timestamp: Date.now()
        }));
      }
    });
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');