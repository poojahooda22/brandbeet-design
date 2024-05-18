import React from 'react'
import style from './style.module.css'
import { data } from '@/data'
import Image from 'next/image'

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
          {/* // 1st row */}
          <div className={`rowDiv ${style.rowDiv} flex flex-col gap-[2vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8192f7a51ade94ebb_LAYOUT-10-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044045bead03dffd01d_Frame%20427320116-p-1600.jpg" alt="" />
            </div>  
          </div>
          {/* // 2nd row */}
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8f0d3c57c3311f16d_LAYOUT-1-p-500.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fee0b8d4e3a73c_LAYOUT-6-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd95bf2f4fe4cfdf9b9_LAYOUT-4-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd82d6d25df67e7d4b8_LAYOUT-3-p-1600.jpg" alt="" />
            </div>
          </div>
          {/* // 3rd row */}
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}> 
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-fit' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
          </div>
          {/* // 4th row */}
          <div className={`rowDiv ${style.rowDiv}  flex flex-col gap-[3vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
            <div className={`imgDiv ${style.imgDiv} `}></div>
          </div>
          {/* // 5th row */}
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
