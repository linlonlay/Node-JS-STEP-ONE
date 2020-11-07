/// JOIN TABLE INSERT

const  client  = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";
const insertOrders = (obj)=>{
    client.connect(url , {useUnifiedTopology : true} , (err , result)=>{
        if(err){
            console.log("Connect Error" , err);
        }else{
            const bdo = result.db('mydb');
            bdo.collection('user').findOne({} , (err , result)=>{
            obj.forEach((ob) => {
                ob['user_id'] = result._id;
                bdo.collection('orders').insertMany(obj , (err , result)=>errorChecker(err, result)); 
                });
            })
        }
    });
}
const orderData = [
    {
        user_id : "id",
        p_name  : "Computer",
        p_count : 3
    },
    {
        user_id : "id",
        p_name  : "Mouse",
        p_count : 4,

    },
    {
        user_id : "id",
        p_name  : "Keyboard",
        p_count : 1,
    },
    {
        user_id : "id",
        p_name  : "Power Supply",
        p_count : 5,
    }
]
insertOrders(orderData);
const errorChecker = (err , result)=>{
    if(err)
    {
        console.log("Something Wrong" , err);
    }
    else 
    {
        console.log('Project Success' , result);
    }
}




