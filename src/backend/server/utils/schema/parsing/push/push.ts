import fs from 'fs';
import datapath from '../../../../../constants';
import parsedschema from '../parseSchema';

for (const modelName in parsedschema.models) {
    const model = parsedschema.models[modelName];
    const fields = Object.keys(model);
    console.log(`Fields of ${modelName}:`);
    for (const fieldName of fields) {
        const fieldType = model[fieldName];
        console.log(`${fieldName}: ${fieldType}`);
    }
}