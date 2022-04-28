const express = require("express");
const router = express.Router();
// const obs_db = require("../models/obsdata");

require("../routes/auth_routes")(router);
require("../routes/user_routes")(router);
require("../routes/obsdata_routes/get_all_tables")(router);
require("../routes/obsdata_routes/get_display_all")(router);
require("../routes/obsdata_routes/post_profile")(router);

module.exports = router;