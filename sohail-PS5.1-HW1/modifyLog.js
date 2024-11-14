const fs = require('fs');

try {
    const data = fs.readFileSync('application_log.txt', 'utf-8');
    const modifiedData = data.replace('Payment processing taking longer than expected for Order #A1234.',
    'Payment for Order #A1234 has been processed successfully.');
    fs.writeFileSync('modifiedLog.txt', modifiedData);
    console.log('File has been modified by Sohail and saved to modifiedLog.txt file')
} catch (error) {
    console.error(error);
}