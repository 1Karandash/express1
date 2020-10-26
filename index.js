const express = require('express');
const app1 = express();
const port = 3010;

app1.get('/app1', (req,res) => {
    console.log('TOUCHED')
    res.send('Hi from the first container!')
})

app1.listen(port, () => {
    console.log('This server is listening on port '+ port +'.')
})