  
const express = require('express');

const app = express();

app.use(express.static('./dist/Devops-Frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Devops-Frontend/'}),
);

app.listen(process.env.PORT || 8080);
