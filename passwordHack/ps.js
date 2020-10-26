const bcrypt = require('bcrypt');
const pswEncrypt = (normalPsw)=>{
    return new Promise((resolve , reject)=>{
        bcrypt.genSalt(10 , (err , salt)=>{
            bcrypt.hash(normalPsw , salt , (err , hashPsw)=>{
                if(err) reject(err)
                resolve(hashPsw);
            })
        })
    })
}

const pswDecrypt = (normalPsw , encodePsw)=>{
    return new Promise((resolve , reject)=>{
        bcrypt.compare(normalPsw , encodePsw ,(err , bool)=>{
            if(err) reject(err)
            resolve(bool)
        })

    })
}

module.exports = {
    pswEncrypt,
    pswDecrypt
}