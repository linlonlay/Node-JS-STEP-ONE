const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


const updateDoc = ()=>{
    client.connect(url , {useUnifiedTopology : true} , (err ,result)=>{
        if(err){
            console.log("Something wrong " , err)
        }
        else{
            const dbo  = result.db('mydb');
            //UPDATE ONE
            dbo.collection('user').updateOne({name : "Kyaw Kyaw"} , {$set : {name : "Kyaw Kyaw lwin"}},(err , result)=>errorChecker(err , result));
            //UPDATE MANY
            // dbo.collection('user').updateMany({age:23}, {$set:{address : "bago"}}, (err , result)=>errorChecker(err , result));
            // dbo.collection("user").insertMany(insertData ,(err , result)=>errorChecker(err , result));
            // dbo.collection('user').deleteOne({name: "Mg Mya"},(err , result)=>errorChecker(err , result))
        }
    })
}
const insertData =[
    {
        name : 'Mg Soe',
        age  : 19,
        address : "Mawlamyine",
        email: "mgsoe@gmail.com"
    },
    {
        name : 'Mg Toe',
        age  : 25,
        address : "Mawlamyine",
        email: "mgtoe@gmail.com"
    },
]
updateDoc();
const errorChecker = (err , result)=>{
    if(err){
        console.log('Something Wrong' , err);
    }else{
        console.log('we are good to go' , result);
    }
}