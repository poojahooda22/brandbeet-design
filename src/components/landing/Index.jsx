import React from 'react'
import style from './style.module.css'
import { data } from '@/data'

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
          justify-center gap-[2vw]'
        >
          <div className={`rowDiv ${style.rowDiv} flex flex-col gap-[2vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              
            </div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            
          </div>
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8106fa4f36fc39bb9_LAYOUT-17-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              
            </div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
          </div>
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}> 
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
          </div>
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
          </div>
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}> 
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
