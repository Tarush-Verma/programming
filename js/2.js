const EventEmitter = require ("events") ;
const eventEmitter = new EventEmitter () ;
// eventEmitter.on('greet' , (username) => {
//     console.log(`Hello, ${username}!`) ;
// })
// eventEmitter.emit('greet', "John") ;/
const myListener = () => console.log("Event occurred!") ;
eventEmitter.on("test", myListener) ;
eventEmitter.emit("test") ;
eventEmitter.removeListener("test", myListener) ;
eventEmitter.emit("test") ;