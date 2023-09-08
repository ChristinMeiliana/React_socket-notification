import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUser = [];

const addNewUser = (username, socketId) => {
  // if user not exist in onlineUser data list , push new data in list
  !onlineUser.some((user) => user.username === username) &&
    onlineUser.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUser.find((user) => user.username === username);
};

io.on("connection", (socket) => {
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });
  socket.on("sendNotification", ({ senderName, receivingName, type }) => {
    const receiver = getUser(receivingName);

    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("someone has left");
  });
});

io.listen(5000);
