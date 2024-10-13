import express from "express";
import cors from "cors";

import router from "./routes/index.js";

import { handleErrors } from "./middleware/errorMiddleware.js";
//create web server

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);
//use error middleware at the end
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:80");
});
