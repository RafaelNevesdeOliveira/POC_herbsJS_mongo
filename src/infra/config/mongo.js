const env = require('sugar-env')
require('dotenv').config()


module.exports = {
  herbsCLI: 'mongo',
  dbName: env.get(`$MONGO_DATABASE`, 'api_company'),
  connstr: env.get(`$MONGO_CONN_STR`, 'mongodb://127.0.0.1:27017'),
}
