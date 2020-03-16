var express = require('express')
const jwt = require('jsonwebtoken');

module.exports.CheckDangnhap = (req,res,next)=>{
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0])){
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'shhhhhh', function(err,decode){
            if(err){
                return res.status(403).send({
                    message:'token invalid'
                }
                )
            }else{
                return next();
            }
        })
    }else{
        return res.status(403).send({
            message:'Unauthorized'
        })
    }
}
