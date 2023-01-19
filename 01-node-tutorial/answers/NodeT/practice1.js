const {sentence} = require('./practice2.js')
const os = require('os')
const {writeFile} = require('fs');
console.log(sentence)
const {username} = os.userInfo()

writeFile('./content/practice.txt',
    `${sentence},${username}`,
    (err,result)=>{
    if(err){
        console.log(err)
        return
    }})