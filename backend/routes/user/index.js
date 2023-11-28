const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
// // Register router :  /guide/api/user/register
route.post("/register", require("./register"));

// // Login router :   /guide/api/user/login
route.post("/login", require("./login"));

// // Get all the guides : /guide/api/user/guides
route.get("/guides", require("./getGuides"));

// // Get guide : /guide/api/user/guide
route.get("/guide", require("./getGuide"));

// choose guide: /guide/api/user/chooseGuide
route.put("/chooseGuide", require("./chooseGuide"));

module.exports = route;
