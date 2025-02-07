const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
ConnectDB();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));