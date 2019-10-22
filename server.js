//import 'dotenv/config'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
/**
 * In production do
 */
//const https = require('https');
//const privateKey = fs.readFileSync('certificates/key.pem', 'utf8');
//const certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
//const credentials = {key: privateKey, cert: certificate};
const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public/')));
//const httpsServer = https.createServer(credentials, app);

router.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use('/', router);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

//httpsServer.listen(8443);
