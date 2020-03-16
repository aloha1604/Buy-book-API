var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/dang-nhap',(req,res)=>{
    if(req.body.username === 'pvgiang' && req.body.password==='123456'){
        var token = jwt.sign({ foo: 'bar' }, 'shhhhhh', { algorithm: 'HS256',expiresIn:'3h' });

        res.send({access_token:token});
    }else{
        res.send('khong xin chao')
    }
})

module.exports = router;