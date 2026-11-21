const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8001;

// Allow the server to process JSON requests
app.use(express.json());

// Serve frontend files from the project directory
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API endpoint to retrieve notes
app.get("/api/notes", (req, res) => {

    const filePath = path.join(
        __dirname,
        "sample-notes.json"
    );

    fs.readFile(filePath, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                error: "Unable to read notes"
            });
        }

        try {
            res.json(JSON.parse(data));
        } catch (error) {
            res.status(500).json({
                error: "Invalid notes JSON"
            });
        }
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Campus Notes running at http://localhost:${PORT}`
    );
});
