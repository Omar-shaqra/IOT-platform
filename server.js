const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/User.js");
const valueRoute = require("./routes/Value.js");
const projectRoute = require("./routes/projectRoutes.js");
const statusRoute = require("./routes/Status.js");
const MoodsRoutes = require("./routes/MoodsRoutes.js");
const ScheduleRoutes = require("./routes/scheduleRoutes.js");
const LocationRoutes = require("./routes/locationRoutes.js");
const DeviceRoutes = require("./routes/DeviceRoutes.js");

const redisRoute = require("./routes/Redis.js");
const senssorRoute = require("./routes/Senssor.js");

//const mqtt = require("./mqtt");

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
app.use("/api/sensors", senssorRoute);

app.use("/api/redis", redisRoute);
app.use("/api/projects", projectRoute);
app.use("/api/status", statusRoute);
app.use("/api/moods", MoodsRoutes);
app.use("/api/schedules", ScheduleRoutes);
app.use("/api/locations", LocationRoutes);
app.use("/api/devices", DeviceRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
