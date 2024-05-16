import React from 'react'
import style from './style.module.css'


function Landing() {
  return (
    <div className='part1 w-full h-[100vh] bg-black '>
      <div className='contentPart1 w-full h-[100vh] flex items-center justify-center'>
        <div className='rotateDiv w-[200%] h-[200vh] bg-black'>
            <div className={`rowDiv ${style.rowDiv} flex items-center justify-center`}></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
