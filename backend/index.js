const express = require('express')
const dbconnection = require("./db");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const cors = require('cors');

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})