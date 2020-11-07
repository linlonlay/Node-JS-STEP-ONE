const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

// INSERT MANY
const findUserWithSort = ()=>{
    client.connect(url , {useUnifiedTopology:true} ,(err , result)=>{
        if(err){
            console.log(`Something Wrong ` , err);
        }else{
            const bdo = result.db('mydb');
            const mySort = {age : 1};
            bdo.collection('user').find({}).sort(mySort).toArray((err , result)=>errChacker(err , result))
        }
    })
}
findUserWithSort();
const errChacker = (err , result)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('We are good to go' , result)
    }
}
