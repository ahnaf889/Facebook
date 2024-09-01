import React from 'react'
import RegistrationPicture from '../../assets/RegistrationRPIcture.png'

const RegistrationRight = () => {
  return (
    <>
    <div className='w-[40%]'>
    <picture>
      <img src={RegistrationPicture} alt={RegistrationPicture} className=' h-screen w-full'/>
    </picture>
    </div>
    </>
  )
}

export default RegistrationRight