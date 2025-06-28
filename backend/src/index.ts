import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

/* 
join format:
{
  "type" : "join",
  "payload": {
    "roomId": "123abc"
  }
}
*/

let allSocket: User[] = [];
wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const messageStr = message.toString();
    const parsedMsg = JSON.parse(messageStr);
    if (parsedMsg.type == "join") {
      allSocket.push({
        socket: socket,
        room: parsedMsg.payload.roomId,
      });
    }
    if (parsedMsg.type == "chat") {
      const currentRoomId = allSocket.find((user) => user.socket == socket);
    }
  });
});
