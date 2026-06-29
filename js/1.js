const EventEmitter = require('events');
class Chat extends EventEmitter {
    sendMessage(message) {
        console.log(`Sending message: ${message}`);
        this.emit('messageSent', message);
    }
}
const chat = new Chat();
chat.on("messageSent" , (message) => {
    console.log(`new message sent: ${message}`) ;
})

chat.sendMessage("Hello, World!") ;