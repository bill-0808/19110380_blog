const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();
const PORT = 5000;
const index = require('./routes/indexRouter')
const blog = require('./routes/blogRouter')


app.use(express.json());
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views/assets'));

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// })

app.use('/', index)
app.use('/blog', blog)

app.listen(PORT)