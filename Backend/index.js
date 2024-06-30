

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if(process.env.NODE_ENV !== "production"){
  disableReactDevTools();
}

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongo DB
try {
  mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


mongodb://localhost:27017/
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})