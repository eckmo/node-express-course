const express = require('express');
const app = express();

const mockUserData=[
    {name: 'Morgan'},
    {name: 'Russell'}
]

app.get('/users',function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        ucers: mockUserData
    })
})

app.listen(8000,function(){console.log('server is listening')})