const fs = require("fs");

const filePath = 'task_log.txt';

try {
    fs.appendFileSync('task_log.txt', `[2024-10-24 10:30:00] [INFO] [TaskModule] Task #T006 completed by User #U125.`);
    console.log("new task added successful.");
} catch (error) {
    console.log({ error: "Could not add new task."})
}