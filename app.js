const express = require("express");
require("./src/db/conn.js");
const router = require("./routes/mensRoute.js");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/user", router);

app.listen(port, () => {
  console.log(`server is started on http://localhost:${port}`);
});
