const client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

client.connect(url ,{ useUnifiedTopology: true }, (err , inst)=>{
    errorChecker(err, inst)

});
const errorChecker = (err , inst)=>{
    if(err){
        console.log('Something Worng' , err);
    }else{
        console.log("Success Connections" , inst);
    }
}