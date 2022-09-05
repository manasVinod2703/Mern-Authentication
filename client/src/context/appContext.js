import React,{useState,useEffect,useContext,useReducer} from 'react';
import { CLEAR_ALERT, SETUP_USER_BEGIN, SETUP_USER_ERROR, SETUP_USER_SUCCESS, SHOW_ALERT } from './actions';
import reducer from './reducer';
import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token')

const initialState = {
    isLoading : false,
    showAlert : false,
    alertText : '',
    alertType : '',
    user : user || null,
    token : token || null,
    email : user ? user.email : null
}



//creating the AppContext
const AppContext = React.createContext();


const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)


    //creating a function to display  the alert
    const displayAlert = ()=>{
           
        dispatch({
            type : SHOW_ALERT
        })

          clearAlert();
    }

    //creating a function to clear the alert
    const clearAlert = ()=>{
        setTimeout(()=>{
            dispatch({
                type : CLEAR_ALERT
            })
       },3000)

       
    }
   

    //creating a function to add the user to the local storage
    const addUserToLocalStorage = (user,token)=>{
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',JSON.stringify(token))
    }



    //function to remove the item from the local storage
    const removeUserFromLocalStorage = ()=>{
        
        localStorage.removeItem('user');
        localStorage.removeItem('token')
    }
        


    // creating a function to set the user up (login and register)
    const setUpUser = async(currentUser,endpoint,alertText)=>{
            
         dispatch({
            type : SETUP_USER_BEGIN
         })

         try{
                const response = await axios.post(`http://localhost:4000/api/v1/auth/${endpoint}`,currentUser);
                //console.log(response)

                const {user,token} = response.data;

                dispatch({
                    type : SETUP_USER_SUCCESS,
                    payload : 
                    {
                        name : user.name,
                        email : user.email,
                        user : user,
                        token : token,
                        alertText : alertText
                    }
                })

                //adding to the local storage
                addUserToLocalStorage(user,token);

         }catch(err){
             console.log(err.response)
             dispatch({
                type : SETUP_USER_ERROR,
                payload :{msg : err.response.data.msg}
             })
         }
         
    }





    return <AppContext.Provider value = {{...state,displayAlert,setUpUser,removeUserFromLocalStorage}} >
         {children}
    </AppContext.Provider>
}


// creating a custom hook to access the context state
const useAppContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,initialState,useAppContext};