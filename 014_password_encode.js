const pswCompare = require('./passwordHack/index');


pswCompare.pswEncrypt('123')
.then(hashPsw => pswCompare.pswDecrypt('123' , hashPsw))
.then(bool => console.log(bool))
.catch(err => console.log(err))


















// pswCompare.pswEncrypt('1s23')
// .then(hashPsw => pswCompare.pswDecript('123' , hashPsw))
// .then(result => console.log(result))
// .catch(err => console.log(err));