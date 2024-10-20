const express = require('express');
const app = express();

const PORT = 4003;

app.listen(PORT, (req, res) => {
	res.send('server started')
}
