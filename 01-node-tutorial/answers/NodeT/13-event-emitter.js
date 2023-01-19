const EventEmitter = require('events');

const joseEmitter = new EventEmitter

joseEmitter.on('response',(name,age)=>{
    console.log(`data recieved user ${name} with age:${age}`)
})
joseEmitter.on('response',()=>{
    console.log('hi there')
})



joseEmitter.emit('response','Jose',20)