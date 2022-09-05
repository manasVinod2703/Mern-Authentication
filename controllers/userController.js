import { StatusCodes } from "http-status-codes";
import UnAuthenticatedError from "../errors/unAuthenticatedError.js";
import badRequestError from "../errors/badRequestError.js";
import notFoundError from "../errors/notFoundError.js";
import User from "../models/User.js";

export const register = async(req,res,next)=>{
      
     try{
        const {name,email,password} = req.body;

        //check if all the values are provided
        if(!name || !email || !password){
            throw new badRequestError("Please Provide all the values!");
        }
    
        //check if the email already exists
        const doesEmailExist = await User.findOne({email});
    
        if(doesEmailExist){
            throw new badRequestError("Email is Already in Use");
        }
    
        const user = await  User.create({name,email,password});

        //creating a token
        const token = user.createJWT();
    
    
    
        res.status(StatusCodes.OK).json({user : {
            name :  user.name,
            email : user.email
        },token : token});
     } catch (err){
          next(err);

     }
   
    
    
}


export const login = async(req,res,next)=>{
    

    try{

        const {email,password} =  req.body
        console.log(password);


        //getting the user
        const user = await User.findOne({email});
        const isEmailValid = await User.findOne({email});

        if(!user){
            throw new notFoundError("Invalid email entered!");
        }

        // checking the password
        const isPasswordCorrect = user.comparePassword(password);
        if(!isPasswordCorrect){
            throw new UnAuthenticatedError("Password is invalid!")
        }

        const token = user.createJWT();

        res.status(StatusCodes.OK).json({user : {
            name :  user.name,
            email : user.email
        },token : token});
       
        

    }catch(err){
          next(err)
    }
}
