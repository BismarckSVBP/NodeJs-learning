const express = require("express");

const { connectMongoDB } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();

const PORT = 8009;
// conection of mongoose
connectMongoDB("mongodb://localhost:27017/bismarck3").then(()=>console.log("MongoDb connected"));

//middleware
app.use(express.urlencoded({ extended: false }));
//above middleware works as

//req.body=processing
app.use(logReqRes("log.txt")); 

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("Server chalu ho gya");
});
