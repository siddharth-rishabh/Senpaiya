const express = require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const cors = require("cors");
const app = express();
const dropRoutes = require("./routes/dropRouter");
const userRoutes = require("./routes/userRouter");
const pingRoutes = require("./routes/pingRouter");
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/drops', dropRoutes);
app.use('/api/users',userRoutes);
app.use('/api/ping', pingRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`localhost is listening at http://localhost:${PORT}`)
});