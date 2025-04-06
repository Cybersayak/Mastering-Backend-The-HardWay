const express = require('express');
const app = express();
const path = require('path');

// Corrected: adding parentheses to invoke express.json() as middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middle Ware to Use Static Files 
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('Server is running');
});


app.get('/demo', function(req, res) {
    res.render('index');
});

// Dynamic Route
app.get('/profile/:username', function(req, res) {
    res.send(`Welcome ${req.params.username} to Backend Development `);
});

app.get('/profile/:username/:role', function(req, res) {
    res.send(`Welcome ${req.params.username} ,You are a ${req.params.role} `);
});


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
    