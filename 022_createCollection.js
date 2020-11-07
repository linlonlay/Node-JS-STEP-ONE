const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


const makeCollection = (colleName)=>{
    client.connect(url ,{ useUnifiedTopology: true } , (err , inst)=>{
        if(err){
            console.log("Something Wrong" , err);
        }else{
            console.log('We are good to go' , inst);
            const dbo = inst.db("mydb");
            dbo.createCollection(colleName , (err, result)=>errChacker(err , result));
        }
    })
}
makeCollection('user');

const errChacker = (err , inst)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('We are good to go' , inst)
    }
}


