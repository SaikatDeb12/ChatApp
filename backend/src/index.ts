import { WebSocketServer, WebSocket } from "ws";
import dotenv from "dotenv";
dotenv.config();
const wss = new WebSocketServer({ port: Number(process.env.PORT as string) });

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

chat format:
{
  "type" : "chat",
  "payload": {
    "message" : "hi there"
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
      const tempSocket = allSocket.find((user) => user.socket == socket);
      const currentRoomId = tempSocket?.room;

      for (let i = 0; i < allSocket.length; i++) {
        if (
          allSocket[i].room == currentRoomId &&
          allSocket[i].socket != socket
        ) {
          allSocket[i].socket.send(parsedMsg.payload.message);
        }
      }
    }
  });
});
