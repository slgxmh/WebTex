import fs = require('fs')
function readFile(path: string, code = 'utf-8') {
    fs.readFile(path, code, (err, data) => {
        if (err) {
            console.error(err)
        }
        return data;
    })
}