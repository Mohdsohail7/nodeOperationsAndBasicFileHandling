const fs = rerequire("fs")
const { console } = require("inspector")
const path = require("path")

const filePath = path.join(__dirname,'log.txt')

try {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log(data)
} catch (error) {
    console.error(error)
}