const express = require("express");
const apiRouter = require("./routes");
const path = require("path");
const cors = require("cors");
const app = express();
const user_db = require("../server/models/users");
const obs_db = require("../server/models/obsdata");
const { ROLES } = require("../server/models/users");
const Role = user_db.role;

var corsOptions = {
  origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", apiRouter);


app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});

// production sync
user_db.sequelize.sync();
obs_db.sequelize.sync();