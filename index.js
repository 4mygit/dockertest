const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

const {router} = require('./Router')

app.use(router)
// A health check endpoint for ECS/ALB
app.get('/', (req, res) => {
    res.send('Hello World and Hello Universe!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.get('/api', (req, res) => {
    res.status(200).json({ mssg: 'This API should be connected to DB later' });
});

app.get('/test', (req, res) => {
    res.send('Cant believe my eyes!');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});