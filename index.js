const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./src/appRoutes");
const BaseError = require("./src/errors/base.error");
const errorHandler = require("./src/utils/errorHandler");
const { StatusCodes } = require('http-status-codes')
const connectDB = require("./config/db.config");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "ping controller is up" });
});

//Last Error handler middleware
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`listening at PORT ${PORT}`);
  await connectDB();
  console.log("connected to the database");


//   const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
});
