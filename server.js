import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import apiRouter from "./routes/api.js";
import pageRouter from "./routes/page.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(apiRouter);
app.use(pageRouter);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});