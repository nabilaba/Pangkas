const cron = require("node-cron");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database/pangkas-database.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;
const fetch = require("node-fetch");

cron.schedule("* * * * *", async () => {
  try {
    await fetch("https://pangkas.herokuapp.com").then((res) => {
      console.log(`Status: ${res.status}`);
    });
  } catch (error) {
    console.log(error);
  }
});

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
