const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const index = require("./routes/index.js");

const port = process.env.PORT || 1337;

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');

app.set("view engine", "ejs");

// Don't show the log when it is a test.
if (process.env.NODE_ENV !== 'test') {
    // Use morgan to log at command line.
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs.
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

const server = app.listen(port, () => {
    console.log('Application programming interface listening on port ' + port);
});

module.exports = server;
