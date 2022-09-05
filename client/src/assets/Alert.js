import styled from "styled-components";

const Wrapper = styled.div`
   h2{
       font-size : 1em;
    
   }
   .alert{
       padding : 0px 20px;
       
    }
     

   .alert.danger{
         border :  2px solid #880808;
         background-color: #E97451;
         h2{
            color:#880808;
         }
         
         
   }

   .alert.success{
         background-color: #DAF7A6;
         border :  2px solid #32CD32;
         h2{
            color :  #008080
         }
   }
`


export default Wrapper;