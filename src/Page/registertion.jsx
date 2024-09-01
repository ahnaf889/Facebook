import React from 'react'
import RegistrationLeft from '../Components/RegistrationComponent/RegistrationLeft'
import RegistrationRight from '../Components/RegistrationComponent/RegistrationRight'

const registertionLeft = () => {
  return (
    <>
    <div className='flex justify-between items-center h-screen'>
    <RegistrationLeft/>
    <RegistrationRight/>
    </div>
    </>
  )
}

export default registertionLeft