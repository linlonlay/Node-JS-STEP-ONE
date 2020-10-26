const bcrypt = require('bcrypt');

const saltRounds = 10;
const pswEncrypt = (plainPsw)=>{
    return new Promise( (resolve  , reject)=>{
        bcrypt.genSalt(saltRounds ,(err , salt)=>{
            bcrypt.hash(plainPsw ,salt , (err , hashPsw)=>{
                if(err) reject(err)
                resolve(hashPsw);
            });
        });
    });
}
const pswDecrypt = (plainPsw , hashPsw)=>{
    return new Promise((resolve , reject)=>{
        bcrypt.compare( plainPsw , hashPsw , (err, bool)=>{
            if(err) reject(err);
            resolve(bool);
        });
    });
}


module.exports = {
    pswEncrypt ,
    pswDecrypt
}