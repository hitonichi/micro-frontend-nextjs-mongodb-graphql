const express = require("express");
const router = express.Router();

require("./routes/note")(router);

module.exports = router;
