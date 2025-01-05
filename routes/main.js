// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get("/user/profile", (req, res) => res.send ("<h1>User profile page</h1>"));
router.get("/contact", (req, res) => res.send ("<h1>Contact Information</h1>"));

router.get("/date", (req, res) => {
    // Send HTML with an embedded script to display current date and time
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Date and Time</title>
        </head>
        <body>
            <h1>Date and Time</h1>
            <p id="datetime">Loading date and time...</p>
            <script>
                // Get the current date and time
                const currentDate = new Date();
                // Display the current date and time in the paragraph with id "datetime"
                document.getElementById("datetime").innerText = currentDate.toLocaleString();
            </script>
        </body>
        </html>
    `);
});



// Export the router object so index.js can access it
module.exports = router;
