import parsedschema from '../server/utils/schema/parsing/parseSchema';
import fs from 'fs';
const models = Object.keys(parsedschema.models);

for (const modelName of models) {
    fs.mkdirSync(`./${modelName}`, { recursive: true });
    fs.writeFileSync(`./${modelName}/data.qtlite`, `!qtlite`);
}