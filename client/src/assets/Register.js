import styled from 'styled-components'


const Wrapper = styled.div`
     
     .form-head{
        color : #50C878;
     }
   .form-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border : 5px solid #00A36C;
        width : max-content;
        margin : 50px auto;
        padding: 10px  40px;
        height: max-content;
        
   }

   .formRow{
       display: flex;
       flex-direction: column;
       margin: 20px 0;
   }
  
   input{
      padding : 5px 10px;
      width : 200px
   }

   .button-container{
       text-align: center;
   }

   .para{
       span{
        color : #50C878;
       }
       span:hover{
           cursor : pointer;
       }
   }

   button{
    background-color:  #50C878;
        padding : 15px 20px;
        outline: none;
        text-decoration :none;
        color: white;
        border: none;
   }

   button:hover{
    cursor : pointer;
    background-color: #4cbb17;
   }

  


   

`


export default Wrapper; 