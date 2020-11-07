module.exports = (express)=>{
    const route = express.Router();

    route.get('/home' , (req, res)=>{
        res.send({Member : 'Member Home route'});
    });
    route.get('/about' , (req,res)=>{
        res.send({Member : 'Member About Route'});
    })
    return route;
}