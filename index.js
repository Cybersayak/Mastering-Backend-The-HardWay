const express = require('express')
const app = express()

//MiddleWare 
app.use(function (req,res, next){
    console.log("At First Middle Ware is Running ");
    next();
})
// MiddleWare   
app.use(function (req,res, next){
    console.log("Again Middle Ware is Running ");
    next();
})

// Routing 
app.get('/', function(req, res) {
    res.send('Hello World!') 
})
// Routing 
app.get('/new', function(req, res) {
    res.send('New Page') 
})

app.get('/error', function(req, res,next) {
    return next(new Error('Something went wrong '))
})
 
//Error Handling 
app.use((err ,req ,res ,next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!') // Response  will be visible in Frontend 
})

app.listen(3000 , () => {
    console.log('Running on Server');
});

    