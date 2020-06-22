const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

let dataArray = [];

app.post('/api', (req, res) => {
    const data = req.body;
    
    dataArray.push(data);
    res.json(dataArray);
    console.log(dataArray);
    dataJson = JSON.stringify(dataArray);
    
    fs.writeFile('public/dataFile.json', dataJson, {flag:'w+'}, function (err) {
        if (err) return console.log(err);
    });
});