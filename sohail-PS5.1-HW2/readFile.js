const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, 'task_log.txt');

try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log("task log file data-> \n",data);

    // Question 2: Count Log Entries by Severity

    const count = data.trim().split('\n').length;
    console.log("total log entries", count);
} catch (error) {
    console.error({error: "file not found or access"}, error);
}