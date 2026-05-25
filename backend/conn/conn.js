const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

mongoose.connect(URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ MongoDB Error:", err);
});