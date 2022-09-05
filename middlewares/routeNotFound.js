const routeNotFound = (req,res,next)=>{
    res.status(500).json({msg :  "Route does not exist!"});
}


export default routeNotFound