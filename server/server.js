const express = require('express');
const { readdirSync } = require("fs");
const dbConnect = require('./connection/dbConnect')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.get('/', (req, res) => {
	  res.send('Hello World!');
});

readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(PORT, () => {
	  console.log(`app listening at http://localhost:${PORT}`);
});
