const fs = require('fs');
const util = require('util');

class file {
    constructor(path, content) {
        this.path = path
        if (this.createFile(content) = null) {
            return;
        }
    }
    async getFile() {
        const readFile = util.promisify(fs.readFile);
        try {
            const data = await readFile(this.path, 'utf8');
            return data;
        } catch (err) {
            return null;
        }
    }
    async filePath() {
        return this.path;
    }

    async createFile(content){
        const writeFile = util.promisify(fs.writeFile);
        try {
            let file = await writeFile(this.path, content);
            return file;
        } catch (err) {
            return null;
        }
    }
}

module.exports = file;
