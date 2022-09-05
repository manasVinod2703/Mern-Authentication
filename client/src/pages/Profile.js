import React from 'react'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/Profile'
import Navbar from '../assets/Navbar'
import Title from '../assets/Title'
import Button from '../assets/Button'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const Profile = () => {

  const {user,removeUserFromLocalStorage,showAlert} = useAppContext()
  
  const navigate = useNavigate();

  const onLogout = ()=>{
   
    removeUserFromLocalStorage();
    navigate('/')
      
  }
      
      
    
    

  const {name,email} = user;
  return (<Wrapper>
         <Navbar>
               <Title>
                     My Authentication
               </Title>
         </Navbar>
         <div className='table-container'>
                <table  className='table'>
                      <thead className='table-head'>
                           <tr className='table-row'>
                                <td>Name</td>
                                <td>Email</td>
                           </tr>
                      </thead>
                      <tbody className='table-body'>
                               <tr>
                                    <td>{name}</td>
                                    <td>{email}</td>
                               </tr>
                      </tbody>
                </table><br></br>
                <Button onClick={onLogout}>
                        Logout
                </Button><br></br>
               
         </div>
  </Wrapper>
    
  )
}

export default Profile