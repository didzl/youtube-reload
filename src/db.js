import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/youtube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB ");
const handleErr = (err) => console.log("❌DB err", err);

db.on("err", handleErr);
db.once("open", handleOpen);
