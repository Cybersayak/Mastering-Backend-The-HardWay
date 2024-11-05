const express = require('express');
const app = express();

// Corrected: adding parentheses to invoke express.json() as middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Server is running');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
