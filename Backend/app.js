const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
var cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const assuranceRouter = require("./routes/assuranceRoutes");
const voitureRouter = require("./routes/voitureRoutes");
const accidentRouter = require("./routes/accidentRoute");
const constatRouter = require("./routes/constatRoute");
const temoinRouter = require("./routes/temoinRoute");
const choqRouter = require("./routes/temoinRoute");
const circonstanceRouter = require("./routes/circonstanceRoute");

// Start express app
const app = express();
app.use(cors({ origin: true, credentials: true }));

app.enable("trust proxy");

// 1) GLOBAL MIDDLEWARES
// Implement CORS

// app.options('/api/v1/tours/:id', cors());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(compression());

// 3) ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/assurance", assuranceRouter);
app.use("/api/v1/voiture", voitureRouter);
app.use("/api/v1/accident", accidentRouter);
app.use("/api/v1/constat", constatRouter);
app.use("/api/v1/temoin", temoinRouter);
app.use("/api/v1/choq", choqRouter);
app.use("/api/v1/circonstance", circonstanceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
