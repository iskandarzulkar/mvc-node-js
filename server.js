const express = require('express')
const exhdl = require('express-handlebars')
const methodOverride = require('method-override')
const path = require('path')
const app = express()
const con = require('./config/db')
//use static expresss
// app.use(express.static(__dirname + 'views'));
// app.use(express.static('public'));

//use static path 
app.set(path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

//templating engine
app.engine('hbs', exhdl({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))

//tes connection to database
con.connect((err) => {
    if (err) throw err;
    console.log('Database is connected')
})

app.use(function (req, res, next) {
    req.con = con
    next()
})

app.listen(8000, () => {
    console.log("Your server is running at port http://localhost:8000")
})

//ROUTE
const mahasiswaRouters = require('./routes/mahasiswaRoutes');
app.use('/', mahasiswaRouters)