const express = require('express');
const userSchema = require('./models/user');

const connectDB = require('./config/database');
const app = express();

connectDB();

app.use(express.json());
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/api/user/register', async (req, res) => {
    try {
        const data = new userSchema(req.body);
        console.log(data);
        await data.save();
        res.status(201).json({message: 'Data saved.', data: data});
    }catch (err) {
        res.status(500).json({message: 'Error saving data', error: err.message});
    }
});
app.get('/api/data', (req, res) => {
    res.json({message: 'Message from backend'});
})
app.listen(PORT, () => {
    console.log('Listening on 4000');
});