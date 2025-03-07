const express = require('express')
const app = express()
const port = 3000;
const connectDB = require('./db/db');
const apiRoutes = require('./routes/api.routes');
connectDB();


app.use(express.json());

// Use the booking routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))