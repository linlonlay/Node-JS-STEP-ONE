const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

// INSERT MANY
const deleteDocument = ()=>{
    client.connect(url , {useUnifiedTopology:true} ,(err , result)=>{
        if(err){
            console.log(`Something Wrong ` , err);
        }else{
            const bdo = result.db('mydb');
            //DELETE ONE
            // const filterQuery = {name : "mgmg"};
            // bdo.collection('user').deleteOne(filterQuery , (err , result)=>errChacker(err , result))
            //DELETE ALL WITH QUERY
            // const filterQuery = {age: 23}
            // bdo.collection('user').deleteMany(filterQuery , (err , result)=>errChacker(err, result))
            //DELETE COLLECTION
            // bdo.collection('user').drop({} , (err, result)=>errChacker(err,result));
            bdo.dropCollection('user' , (err , result)=>errChacker(err , result))

        }
    })
}
deleteDocument();
const errChacker = (err , result)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('We are good to go' , result)
    }
}


