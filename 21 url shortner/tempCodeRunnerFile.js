const URL = require("./models/url");
const app = express();

const port = 9002;
connectMongoDB("mongodb://localhost:27017/abha").then(() =>
  console.log("MongoDb connected")
);
app.use(express.json());