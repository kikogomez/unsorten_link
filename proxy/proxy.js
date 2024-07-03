const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/expand', async (req, res) => {
    const shortUrl = req.query.url;
    try {
        const response = await fetch(shortUrl, { method: 'HEAD', redirect: 'manual' });
        if (response.status === 301 || response.status === 302) {
            const longUrl = response.headers.get('Location');
            res.json({ longUrl });
        } else {
            res.status(400).json({ error: 'No redirection found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
