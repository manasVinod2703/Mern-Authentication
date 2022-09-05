import React from 'react'
import Wrapper from '../assets/Alert'
import { useAppContext } from '../context/appContext'

const Alert = () => {

    const {alertText,alertType} = useAppContext();
  return (
    <Wrapper>
    <div className={`alert  ${alertType}`}>
        <h2>{alertText}</h2>
    </div>
    </Wrapper>
  )
}

export default Alert