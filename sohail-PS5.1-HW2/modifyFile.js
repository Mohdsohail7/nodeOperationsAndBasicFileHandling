const fs = require("fs");

const filePath = 'task_log.txt';

try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const updatedData = data.replace('Failed to update task status for Task #T002.', 'Task #T002 status successfully updated after retry.');
    fs.writeFileSync('task_log.txt', updatedData);
    console.log("data modify successflly.");
} catch (error) {
    console.error({ error: "could not modify data."});
}