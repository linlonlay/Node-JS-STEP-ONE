const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


// const makeCollection = (colleName)=>{
//     client.connect(url ,{ useUnifiedTopology: true } , (err , inst)=>{
//         if(err){
//             console.log("Something Wrong" , err);
//         }else{
//             console.log('We are good to go' , inst);
//             const dbo = inst.db("mydb");
//             dbo.createCollection(colleName , (err, result)=>errChacker(err , result));
//         }
//     })
// }
// makeCollection('user');


// INSERONE 
// const makeDocument = (obj)=>{
//     client.connect(url ,{ useUnifiedTopology: true } , (err ,result)=>{
//         if(err){
//             console.log('Something Wrong' , err);
//         }else{
//             console.log('We Are Good To Go' , result);
//             const dbo = result.db('mydb');
//             dbo.collection('user').insertOne(obj ,(err, result)=>errChacker(err , result));
//         }
//     })
// }
// makeDocument({name:"mgmg" , age :22 , email: "mgmg@gmail.com"});


// INSERT MANY
const insertDocument = (obj)=>{
    client.connect(url , {useUnifiedTopology:true} , (err, result)=>{
        if(err){
            console.log(`Something Worng` , err);
        }else{
            const dbo = result.db("mydb");
            dbo.collection('user').insertMany(obj , (err , result)=>errChacker(err, result));
        }
    })
}
insertDocument([
    {name : "Kyaw Kyaw5" , age : 23 , email: "kyawkyaw@gmail.com" , address:'yangon'},
    {name : "Kyaw Kyaw" , age : 23 , email: "kyawkyaw1@gmail.com" , address:'mandalay'},
    
])
const errChacker = (err , result)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('We are good to go' , result)
    }
}


