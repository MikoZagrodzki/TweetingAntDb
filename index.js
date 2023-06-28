const express = require("express");
const app = express();
const cors = require("cors");
const databaseRouter = require("./routes/databaseRouter");
const twitterClassRouter = require("./routes/twitterClassRouter");




app.use(express.json());
app.use(cors({ origin: true })); // enable origin cors
app.all(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept", "*");
  next();
});

app.use("/", databaseRouter);
app.use("/", twitterClassRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server listening on port ${port}`));


