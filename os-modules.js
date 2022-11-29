//OS Module= interacting with the operating system
const os=require('os')

//get the current user
const user=os.userInfo()

//system uptime in seconds
/* console.log(`The system uptime is ${os.uptime()}`);
console.log(user); */

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
