import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";

import { handleErrors } from "./middleware/errorMiddleware.js";
//create web server

const app = express();

app.use(cors());
app.use(express.json());

// 增加 JSON 和 URL 编码请求体大小限制
app.use(bodyParser.json({ limit: "10mb" })); // 例如，10MB
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/api", router);
//use error middleware at the end
app.use(handleErrors);

const PORT = 8001;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:8001");
});
