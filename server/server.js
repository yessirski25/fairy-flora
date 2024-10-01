const express = require("express");
require ("dotenv").config();

const createPrismaClient = require("./prisma/lib/db");

createPrismaClient();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/employees", require("./routes/employeeRoutes"))

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})