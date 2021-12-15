const http = require('http');
const app = require('./app/app'); // the actual Express application
const config = require('./config');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
