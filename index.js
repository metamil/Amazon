const express = require("express");
const dotenv  = require("dotenv").config();
const dbConnect = require("./config/dbConnect").dbConnect;
const authRoute = require("./routes/authRoute")
const app = express();

app.use(express.json());
app.use("/api/user",authRoute);

dbConnect();

const PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`);
});