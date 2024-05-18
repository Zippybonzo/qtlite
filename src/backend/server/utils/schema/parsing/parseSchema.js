const f = require('node:fs');
function parseSchema(schema) {
    const lines = schema.split('\n');
    let currentModel = null;
    let models = {};
    let connection = {};
    let inConnectionBlock = false;

    lines.forEach(line => {
        if (line.trim() === '' || line.trim() === '}') {
            if (inConnectionBlock) {
                inConnectionBlock = false;
            }
            return;
        }
        if (line.startsWith('connection')) {
            inConnectionBlock = true;
            currentModel = null;
        } else if (line.startsWith('model')) {
            const modelName = line.split(' ')[1];
            currentModel = modelName;
            models[modelName] = {};
        } else if (currentModel) {
            const [property, type] = line.trim().split(' ');
            models[currentModel][property] = type;
        } else if (inConnectionBlock) {
            const [property, value] = line.trim().split(' ');
            connection[property] = value;
        }
    });

    return { models, connection };
}

const schema = f.readFileSync('../schema.qtlite', 'utf-8');

module.exports = parseSchema;
