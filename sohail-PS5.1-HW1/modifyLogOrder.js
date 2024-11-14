const fs = require("fs");
const path = require('path');

const filePath = path.join(__dirname, 'application_log.txt');

try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const parcelReplaceOrder = data.replace(/(Order #A1234)/g, '[parcel] $1');

    fs.writeFileSync(filePath, parcelReplaceOrder);
    console.log("Log entries updated to include '[parcel]' before the message.");

} catch (error) {
    console.error(error);
}