import fs from 'fs';

interface Models {
    [modelName: string]: {
        [property: string]: string;
    };
}

interface Connection {
    [property: string]: string;
}

function parseSchema(schema: string) {
    const lines = schema.split('\n');
    let currentModel: string | null = null;
    let models: Models = {};
    let connection: Connection = {};
    let inConnectionBlock = false;

    lines.forEach((line: string) => {
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

const formatteddir = __dirname.replace('/parsing', '/');
const schema = fs.readFileSync(formatteddir + '/schema.qtlite', 'utf-8');

let parsedschema = parseSchema(schema);

export default parsedschema;
