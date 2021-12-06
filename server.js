const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoute);

app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});