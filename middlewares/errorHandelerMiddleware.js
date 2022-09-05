import { StatusCodes } from "http-status-codes";



export const  errorHandelerMiddleware = (err,req,res,next)=>{
      
    console.log(err);

    const defaultError = {
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error : err.message  || "Something went wrong, try again later!"
    }
    

    //validation for empty fields
    if(err.name === "ValidationError"){

        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        //defaultError.error = err.message

        defaultError.error = Object.values(err.errors).map((item)=>item.message).join(',')
    }

    //validation for unique email
    if(err.code && err.code ===11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.error = `${Object.keys(err.keyValue)}  must be unique`
    }
   // res.status(defaultError.statusCode).json({ msg :err});
   res.status(defaultError.statusCode).json({ msg :defaultError.error});
}



export default errorHandelerMiddleware;