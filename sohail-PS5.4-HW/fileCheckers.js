require('dotenv').config();
const fs = require('fs');
const path = require('path');
//const path = process.env.FILE_PATH;

const fileNames = process.env.FILE_NAMES;
const directoryPath = process.env.DIRECTORY_PATH;

function checkAndCreateFile(fileNames, directoryPath) {
  if (!fileNames || !directoryPath) {
    console.log('File names or directory path not defined.');
    return;
  }
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Directory created: ${directoryPath}`);
  }

  const filesArray = fileNames.split(',');

  filesArray.forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName.trim());

    if (fs.existsSync(filePath)) {
      console.log(`${fileName.trim()} already exists.`);
    } else {
      fs.writeFileSync(filePath, 'Hello I am Sohail.');
      console.log(`${fileName.trim()} created.`);
    }
  });
}

checkAndCreateFile(fileNames, directoryPath);
