import React from 'react'
import Navbar from '../assets/Navbar'
import Title from '../assets/Title'
import HomeHead from '../assets/HomeHead'
import Container from '../assets/Container'
import HomePara from '../assets/HomePara'
import {Link} from 'react-router-dom'
import Button from '../assets/Button'
const Home = () => {
  return (
    <>
      <Navbar>
         <Title>
            My Authentication
         </Title>
    </Navbar>
    <HomeHead>
        Please Register and Login with us!
    </HomeHead>
    <Container>
          <HomePara>
                 This is a sample User Authentication Website , built with MERN Stack and JWT Tokens
          </HomePara>
          <Button>
          <Link to='/register' className='primary-link'>Register</Link>
          </Button>
          
    </Container>
    </>
  )
}



export default Home