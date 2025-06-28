import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });

let connections: WebSocket[] = [];
wss.on("connection", (socket) => {
  console.log("connected");
  connections.push(socket);
  socket.on("message", (message) => {
    //broadcast:
    connections.forEach((s) => {
      s.send(message.toString());
    });
  });

  socket.on("close", (socket: WebSocket) => {
    connections.filter((x: WebSocket) => x != socket);
  });
});
