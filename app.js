const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
const bodyparser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000;
const path = require("path");
const authRoutes = require('./routes/auth')
app.use(cors())
app.use(bodyparser.json())

app.use(authRoutes)

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}


app.listen(port, () => console.log(`Listening on port ${port}!`));
