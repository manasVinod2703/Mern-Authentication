import React,{useState,useEffect} from "react";
import Navbar from "../assets/Navbar";
import Title from "../assets/Title";
import Wrapper from "../assets/Register";
import Button from "../assets/Button";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    

    const initialState = {
        name : '',
        email : '',
        password : '',
        isMember : true
    }
      
     const [values,setValues] = useState(initialState);
     
     const {showAlert,displayAlert,setUpUser,user} = useAppContext();

     const navigate = useNavigate();

   const toggleMember = ()=>{
     setValues({...values, isMember : !values.isMember});
   }

  const handleChange = (e) => {
          setValues({...values,[e.target.name] : e.target.value})
         // console.log([e.target.name]);
  };

  const onSubmitHandeler = (e) => {
    e.preventDefault();

    const {name,email,password} = values

    const currentUser = {name,email,password}

    if(!email ||  !password || (!values.isMember && !name)){
         displayAlert()
         return;
    }

    if(!values.isMember){
         setUpUser(currentUser,'/register',"User Registered Successfully! Redirecting....!")
         
    }

    setUpUser(currentUser,'/login',"User Logged in! Redirecting...!")

    //console.log(values);
  };


  // redirect to the profile page after login
  useEffect(()=>{
         if(user){
         setTimeout(()=>{
            console.log(user,"Logging in...")
            navigate('/profile')
         },1000)}
  },[user,navigate])

  return (
    <Wrapper>
      <Navbar>
        <Title>My Authentication</Title>
      </Navbar>
      <div className="form-container">
        <h1 className="form-head">{values.isMember ? "Login" : "Register"}</h1>

       {showAlert && <Alert />}

        <form autoComplete="off" onSubmit={onSubmitHandeler}>
         { !values.isMember &&<div className="formRow">
            <label htmlFor="name">Name</label>
            <input value = {values.name}type="text" name="name" onChange={handleChange} />
          </div>}

          <div className="formRow">
            <label htmlFor="email">Email</label>
            <input value = {values.email} type="email" name="email" onChange={handleChange} />
          </div>

          <div className="formRow">
            <label htmlFor="password">Password</label>
            <input value = {values.password} type="password" name="password" onChange={handleChange} />
          </div>

          <div className="para">
                <p>{values.isMember  ? "Not a member yet? " : "Already a member? "}
                    <span onClick={toggleMember}> {values.isMember ? "Register!" : "Login!"}</span></p>
          </div>
          <div className="button-container">
            <button type="submit"  >Submit</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
