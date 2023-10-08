const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/User.js");
const valueRoute = require("./routes/Value");
const projectRoute = require("./routes/projectRoutes.js");
const statusRoute = require("./routes/Status.js");

const redisRoute = require("./routes/Redis.js");
const senssorRoute = require("./routes/Senssor.js");


const mqtt = require("./mqtt");

const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.use("/api/users", userRoute);
app.use("/api/values", valueRoute);
app.use("/api/redis", redisRoute);
<<<<<<< HEAD
app.use("/api/senssor", senssorRoute);


=======
app.use("/api/projects", projectRoute);
app.use("/api/status", statusRoute);
>>>>>>> a11c44a780ada9beb2b767b7fa26701f94828184

app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
