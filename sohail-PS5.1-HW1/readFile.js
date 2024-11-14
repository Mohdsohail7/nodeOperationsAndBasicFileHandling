const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, 'application_log.txt');

try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
    const totalLog = data.trim().split('\n').length;
    console.log("total Log entries", totalLog);
} catch (error) {
    console.error({error: "File not found"}, error);
}