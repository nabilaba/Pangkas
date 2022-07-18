const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database/pangkas-database.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
