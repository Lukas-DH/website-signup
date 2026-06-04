const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// API endpoint to forward data to Google Sheets
app.post("/api/submit-lead", async (req, res) => {
  try {
    const formData = req.body;

    // Forward to Google Sheets
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwmoL3nmKX7SmIAxtygBEn37Z5ehhrSWacf7mvM5uCqLKunDbtsSsQqeulWg7I3ACcMvQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const result = await response.text();
    console.log("Google Sheets response:", result);

    res.json({ success: true, message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to forward data to the NEW Google Sheet
app.post("/api/submit-answers", async (req, res) => {
  try {
    const formData = req.body;

    // Forward to the new Google Sheet
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby8AIniMfjhqAHoH-j4AX8MO4CnXiMRsc_lKFqtWShGO378W6h4F4BkB7TixOJlGsuc/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const result = await response.text();
    console.log("New Google Sheets response:", result);

    res.json({ success: true, message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting to new Google Sheets:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
