const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'task_log.txt');
const newLogEntry = '\n[2024-11-14 10:00:00] [INFO] [SystemModule] Task #T007 Attempted log entry with restricted permissions.';


try {
    fs.appendFileSync(filePath, newLogEntry);
    console.log('new log entry added.');
} catch (error) {

    if (error.code === 'EACCES' || error.code === 'EPERM') {
        console.error('Permission denied: Cannot write Or append file. Error:', err.message);
    } else {
        console.error('Error Occured', error.message);
    }
    
}