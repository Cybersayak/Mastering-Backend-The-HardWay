const { log } = require('console');
const fs = require('fs')
const os = require('os')

// OS 
let user = os.userInfo();
//console.log(user);

// FS 
fs.appendFile('greet.txt' , 'Welcome ' + user.username + '!\n' , () => {
    // console.log("File created ");
});
  
// console.log(fs);
// console.log(os);



