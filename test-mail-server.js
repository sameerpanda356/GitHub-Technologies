import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());

// ✅ Use multer to handle multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });


// Optional root route
app.get("/", (req, res) => res.send("📬 Test mail server running with attachments ✅"));

// ✅ Handle POST /send-email
app.post("/send-email", upload.single("attachment"), (req, res) => {
  console.log("📩 Received form data:");
  console.log("Fields:", JSON.parse(JSON.stringify(req.body)));

  if (req.file) {
    console.log("📎 Received file:", {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: `${(req.file.size / 1024).toFixed(2)} KB`,
    });
  } else {
    console.log("⚠️ No attachment uploaded.");
  }

  res.json({
    message: req.file
      ? `Mock email sent with attachment: ${req.file.originalname}`
      : "Mock email sent successfully (no attachment).",
  });
});

app.listen(5001, () =>
  console.log("✅ Test mail server running on http://localhost:5001")
);
