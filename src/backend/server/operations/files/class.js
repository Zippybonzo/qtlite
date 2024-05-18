class Filemanager {
    static managers = [];

    constructor() {
        if (Filemanager.managers.length > 0) {
            Filemanager.managers = [];
        }
        Filemanager.managers.push(this);
        this.fs = require('fs');
        this.path = require('path');
    }

    createFile(path, content) {
        let file = new file(path, content);
        return file;
    }

    readFile(path) {
        return this.fs.readFileSync(path, 'utf8');
    }

    writeFile(path, content) {
        this.fs.writeFileSync(path, content);
    }

    deleteFile(path) {
        this.fs.unlinkSync(path);
    }
}

module.exports = Filemanager;
