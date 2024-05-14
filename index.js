require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const express = require("express");
const app = express();
const counterRouter = require("./backend/counterRoute");
app.use(express.static(path.join(__dirname, "client", "dist")));


if (dev) {
  const webpackDev = require("./dev");
  app.use(webpackDev.comp).use(webpackDev.hot);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use("/api", counterRouter);

app.listen(3000, function () {
  console.log("Server started on :3000");
});
