import parsedschema from '../server/utils/schema/parsing/parseSchema';
import fs from 'fs';
import getNextId from './nextid';
import { parse } from 'path';
const models = Object.keys(parsedschema.models);

export default function createFirst(modelName: string, data: {}) {
    fs.mkdirSync(`./${modelName}`, { recursive: true });
    fs.writeFileSync(`./${modelName}/data.qtlite`, `
!qtlite
[id: ${getNextId(modelName)}]  
${parseData(data)}
    `);
};

function parseData (data: {}) {
    const json = JSON.stringify(data);
    /* need to add a system to parse the schema to find the strings and other types and either format them or apply particular data formatting to them (or do that on read, not certain yet)
    this might take its own file later, but this is the basic creating logic which eventually needs moving to /src/backend/server/operations/create, but again, that can be done another day :)
    */
    // probably a better way to do this but this works
    let step1 = json.replaceAll(',', '\n');
    let step2 = step1.replaceAll('{', '');
    let step3 = step2.replaceAll('}', '');
    let step4 = step3.replaceAll('[', '');
    let step5 = step4.replaceAll(']', '');
    let step6 = step5.replaceAll('}', '');
    let step7 = step6.replaceAll(':', ': ');
    let result = step7.replaceAll('"', '');
    return result;
}
createFirst('user', {
    name: 'John Doe',
    age: 25,
    email: 'john@doe.com',
});