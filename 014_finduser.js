const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

// INSERT MANY
const findUser = ()=>{
    client.connect(url , {useUnifiedTopology:true} ,(err , result)=>{
        if(err){
            console.log(`Something Wrong ` , err);
        }else{
            const bdo = result.db('mydb');
            //FIND ONE
            // bdo.collection('user').findOne({} , (err , result)=>errChacker(err,result));
            //FIND ALL
            // bdo.collection('user').find({}).toArray((err,result)=>errChacker(err,result));
            //FIND QUERY
            // let query = {name : "Kyaw Kyaw"};
            // bdo.collection('user').find(query).toArray((err, result)=>errChacker(err, result));
            //FIND ALL USER'S NAME
            // bdo.collection('user').find({} , {projection : {name: 1}}).toArray((err , result)=>errChacker(err, result))
            //FIND ALL USER'S NAME WITHOUT ID
            bdo.collection('user').find({} , {projection:{_id: 0,name : 1}}).toArray((err , result)=>errChacker(err, result));
        }
    })
}
findUser();
const errChacker = (err , result)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('We are good to go' , result)
    }
}


