import express from "express";
import morgan from "morgan";

const loggerMid = morgan("short");
const PORT = 4000;
const app = express();
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//application setting
const handleHome = (req, res) => {
  return res.send("I love Middleware!!!");
};

app.use(loggerMid);
app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
