module.exports = (express)=>{
    const route = express.Router();
    route.get('/' , (req,res)=>{
        res.send({Guest:"Guest Home Rout"});
    });
    route.get('/about' , (req, res)=>{
        res.send({Guest:"Guest About Route"});
    })

    return route ;
}