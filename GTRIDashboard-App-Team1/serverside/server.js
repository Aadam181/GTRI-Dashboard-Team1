const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/api')
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/api', api)

app.get('/', function (req, res){
    res.send('hello')
})


function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}


app.use(requireHTTPS);

app.use(express.static('./dist/gtridashboard-app-team1'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: 'dist/gtridashboard-app-team1/'});
  });

  app.listen(process.env.PORT || 8080);