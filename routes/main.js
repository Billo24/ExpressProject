// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get("/user/profile", (req, res) => res.send ("<h1>User profile page</h1>"));
router.get("/contact", (req, res) => res.send ("<h1>Contact Information</h1>"));
router.get("/contact", (req, res) => res.send ("<p1>Contact information goes here</p1>"));
router.get("/date", (req, res) => res.send ("<h1>Date and time</h1>"));

<script>
const d = new Date();
document.getElementById("demo").innerHTML = d;
</script>

router.get("/date", (req, res) => res.send ("<p id="demo"></p>"));



// Export the router object so index.js can access it
module.exports = router;
