function create({ model: model, data: { data } }) {
  // logic to find model in schema, if the model doesn't exist throw an error
  // create the record in the correct table
  // return the record data to client or as necessary check the config to enact further action
  return data
}

console.log(create({ model: 'user', data: { data: { name: 'John' } }}));