const fs = require('fs');

try {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    fs.appendFileSync('application_log.txt', `[${timestamp}] [INFO] [ShippingModule] Order #A1234 has been shipped. .`)
    console.log('data append successfull');
} catch (error) {
    console.error({error: 'file not append'}, error);
}