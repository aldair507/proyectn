import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const App = express();

App.use(express.json());
App.use(morgan("dev"));
App.use(cookieParser());

export default App;
