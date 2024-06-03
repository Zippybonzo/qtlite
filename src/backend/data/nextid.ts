import fs from 'node:fs';

export default function getNextId(modelName: string) {
    const data = fs.readFileSync(`./${modelName}/data.qtlite`, 'utf8');
    if (!data) return 1;

    const lines = data.split('\n');
    let maxId = 0;

    for (const line of lines) {
        const id = parseInt(line.split(',')[0]);
        if (id > maxId) {
            maxId = id;
        }
    }

    return maxId + 1;
}

