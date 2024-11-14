const fs = require("fs");

try {
    fs.appendFileSync('log.txt', `[New log entry]: Data appended by Sohail at 2:00 PM\\n`) 
    console.log("Data append Successfully")
} catch (error) {
    console.error(error)
}