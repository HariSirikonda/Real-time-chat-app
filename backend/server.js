const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleWare");
const cors = require("cors");

const app = express();
dotenv.config();
ConnectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.body)
    res.send("API is Running");
});

app.use('/api/user', userRoutes)

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));