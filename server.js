const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersData = require('./users.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    let { username, password } = req.body;

    username = username.trim();
    password = password.trim();

    const user = usersData.find(user => user.username === username && user.password === password);

    console.log(user);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
