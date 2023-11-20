import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Pictorial BE");
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://KerimYilmaz:Kerim1234@pictorial.oqvhnyj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
