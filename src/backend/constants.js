if (!process.cwd().includes('src/backend')) {
    throw new Error('Please start the database from the /backend directory.');
    return null;
}

const datapath = process.cwd() + '/data';

module.exports = datapath;
