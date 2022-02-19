import express from "express";
import path from "path";

//App
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public/")));

//Routes
import { router as index } from "./routes/index";
import { router as anotherPage } from "./routes/another";
import { router as what } from "./routes/what";

//Use routes
app.use("/", index);
app.use(anotherPage);
app.use(what);

//Start server
app.listen("3001", () => {
  console.log("App has started on port: 3001");
});
