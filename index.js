const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", true);

app.get('/', (req, res) => {
    res.send(`<h1>Server Running Perfect.</h1>`)
});

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'Server Health is good.',
    });
})

app.get('/get-ip', (req, res) => {
    const ip = req.ip;

    res.send(`Your IP is: ${ip}`);
})

app.get("/v2/get-ip", (req, res) => {
    let ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    // Convert IPv6-mapped IPv4 to normal IPv4
    if (ip && ip.startsWith("::ffff:")) {
        ip = ip.substring(7);
    }

    res.json({ ip });
});


app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

