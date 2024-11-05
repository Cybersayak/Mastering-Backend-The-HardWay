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

// MiddleWare
app.use(express.json()); // Makes the JSON data Readable to Server that comes from Frontend
app.use(express.urlencoded({extended:true})); // Make the x -www-form-urlencoded   , understandable and readable to server 


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

app.listen(3002 , () => {
    console.log('Running on 3002');
});
