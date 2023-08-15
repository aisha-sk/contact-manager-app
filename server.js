const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
connectDb();
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes")); // middleware
app.use("/api/users", require("./routes/userRoutes"))
//error handler middleware

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

// to test api, we need an http client e.g. thunderclient
