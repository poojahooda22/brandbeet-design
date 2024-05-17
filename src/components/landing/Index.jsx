import React from 'react'
import style from './style.module.css'


function Landing() {
  return (
    <div 
      className='part1 w-[100%] 
      h-[100vh] bg-black '
    >
      <div 
        className='contentPart1 w-[100%] 
        h-[100vh] 
        flex items-start
        justify-center'
      >
        <div 
          className='rotateDiv w-[200vw] 
          h-[200vh] bg-black  
          flex items-center
          justify-center gap-[3vw]'
        >
          <div className={`rowDiv ${style.rowDiv} space-y-8`}>
            <div className={`imgDiv ${style.imgDiv} bg-white`}>

            </div>
          </div>
          <div className={`rowDiv ${style.rowDiv}`}>
          </div>
          <div className={`rowDiv ${style.rowDiv}`}>
          </div>
          <div className={`rowDiv ${style.rowDiv}`}>

          </div>
          <div className={`rowDiv ${style.rowDiv}`}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
