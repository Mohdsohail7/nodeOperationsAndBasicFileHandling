const fs = require("fs");

try {
    const data = fs.readFileSync('log.txt', 'utf-8');
    const modifiedData = data + '\\n Modified content: Entry added at 4 PM\\n'
    fs.writeFileSync('modifiedLog.txt', modifiedData)
    console.log('File has been modified by Sohail and saved to modifiedLog.txt file')
} catch (error) {
    console.error(error)
}