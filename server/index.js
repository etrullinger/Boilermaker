const { db } = require('./db');
// server that we already created and used as the previous entry point
const app = require('./server.js');
const port = process.env.PORT || 3000;

db.sync().then(() => { // sync our database
  console.log('db synced');
  app.listen(port, () => console.log(`listening on port ${port}`)) // then start listening with our express server once we have synced
}); 
  