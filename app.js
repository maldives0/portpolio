const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');

const app = express();
dotenv.config();

const prod = process.env.NODE_ENV === 'production';
const port = prod ? 80 : 3051;

db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello express');
});




app.listen(port, () => {
    console.log(`${port}에서 대기 중`);
});