import { SHOW_ALERT,SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR} from "./actions";

const reducer = (state,action)=>{
     if(action.type === SHOW_ALERT ){
         return {...state,
        showAlert : true,
        alertType : 'danger',
       alertText : "Please Provide all the values!"}
     }

     else if (action.type === SETUP_USER_BEGIN){
        return {...state,
        isLoading : true}
     }

     else if(action.type === SETUP_USER_SUCCESS){
          return {
            ...state,
            isLoading : false,
            name : action.payload.name,
            email : action.payload.email,
            token : action.payload.token,
            user : action.payload.user,
            showAlert : true,
            alertText : action.payload.alertText,
            alertType : 'success'

          }
     }

     else if(action.type === SETUP_USER_ERROR) {
          return {
            ...state,
            isLoading : false,
            showAlert : true,
            alertType : 'danger',
            alertText : action.payload.msg

          }
     }

}

export default reducer;