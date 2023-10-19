const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
var cors = require('cors')

const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/todos', require('./routes/todoRoutes'));
app.use('/api/v1/users',require('./routes/userRoutes'))



app.use(errorHandler);

app.listen(port, () => { console.log(`app is listening in port ${port}`) });