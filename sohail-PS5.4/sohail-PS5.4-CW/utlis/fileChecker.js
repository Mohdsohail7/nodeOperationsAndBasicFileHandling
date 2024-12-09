require('dotenv').config();
const fs = require('fs');
const path = process.env.FILE_PATH;

function checkAndCreateFile(filePath) {
    if (!filePath) {
        console.log('File path not defined.');
        return;
    }
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(filePath, 'Hello i am Sohail.', (writeErr) => {
                if (writeErr) throw writeErr;
                console.log('File Created.')
            });
        } else {
            console.log('File Already Exist.');
        }
    })
}

checkAndCreateFile(path);
