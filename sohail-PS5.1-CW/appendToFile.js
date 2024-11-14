const fs = require("fs");

try {
    fs.appendFileSync('log.txt', `[New log entry]: Data appended by Sohail at 2:00 PM\\n`) 
} catch (error) {
    console.error(error)
}