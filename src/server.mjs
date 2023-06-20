import bodyParser from "body-parser";
import * as Validate from "./validator.mjs";

const server = require("express")();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.post("/", async function (request, response) {
  try {
    await Validate.credentials(request.body);
    response.send("Data is ok!");
  } catch (error) {
    response.send("Data is not valid!");
  }
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000!`);
});
