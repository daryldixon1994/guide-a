const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
// Register router : /guide/api/admin/register
route.post("/register", require("./register"));

// Login router : /guide/api/admin/login
route.post("/login", require("./login"));

// Add Guide : /guide/api/admin/addGuide
route.post("/addGuide", multer.single("photo"), require("./addGuide"));

// Get Guides : /guide/api/admin/getGuides
route.get("/getGuides", require("./getGuides"));

// Get Guides : /guide/api/admin/getUsers
route.get("/getUsers", require("./getUsers"));

// Get Guide : /guide/api/admin/guide
route.get("/guide", require("./getGuide"));


// Update Guide : /guide/api/admin/updateGuide
route.put("/updateGuide", require("./updateGuide"));

// Update Photo Guide : /guide/api/admin/updatePhotoGuide
route.put(
  "/updatephotoGuide",
  multer.single("photo"),
  require("./updatePhotoGuide")
);

// Delete Guide : /guide/api/admin/deleteGuide
route.delete("/deleteGuide/:id", require("./deleteGuide"));

module.exports = route;
