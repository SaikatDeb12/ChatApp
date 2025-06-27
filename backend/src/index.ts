import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (message) => {
    console.log(message.toString());
    setTimeout(() => {
      socket.send(message.toString() + "send by server");
    }, 2000);
  });
});
