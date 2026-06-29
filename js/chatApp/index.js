const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join" , (user) => {
    console.log(`${user} has joined the chat room.`)
})

chat.on("message", (user, message) => {
    console.log(`${user} says: ${message}`)
});

chat.on("leave", (user) => {
    console.log(`${user} has left the chat room.`)
});

chat.join("Alice");
chat.join("Bob");
chat.sendMessage("Alice", "Hello everyone!");
chat.sendMessage("Bob", "Hi Alice!");
chat.leave("Alice");
chat.sendMessage("Alice", "Goodbye!");