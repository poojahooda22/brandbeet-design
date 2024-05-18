import React from 'react'
import style from './style.module.css'
import { data } from '@/data'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

function Landing() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.part1',
        start: '50% 50%',

        markers: true,
      }
    })
  })
  return (
    <div 
      className='part1 sm:w-[100%] 
      sm:h-[100vh] bg-black '
    >
      <div 
        className='contentPart1 sm:w-[100%] 
        sm:h-[100vh] 
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
          <div className={`rowDiv ${style.rowDiv} rowDiv1 mt-[-3%] flex flex-col gap-[2vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8192f7a51ade94ebb_LAYOUT-10-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044045bead03dffd01d_Frame%20427320116-p-1600.jpg" alt="" />
            </div>  
          </div>
          {/* // 2nd row */}
          <div className={`rowDiv ${style.rowDiv} rowDiv2 mt-[-5%] flex flex-col gap-[2vw] `}>
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
          <div className={`rowDiv ${style.rowDiv} rowDiv3 mt-[-8%] flex flex-col gap-[2vw] `}> 
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8207f66103ea6893d_LAYOUT-2-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-2000.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8192f7a51ade94ebb_LAYOUT-10-p-1080.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8106fa4f36fc39bb9_LAYOUT-17-p-1600.jpg" alt="" />
            </div>
          </div>
          {/* // 4th row */}
          <div className={`rowDiv ${style.rowDiv} rowDiv4 mt-[-12%] flex flex-col gap-[2vw] `}>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8fa4742b8e1f3b6b8_LAYOUT-8-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd842f7724f0665b2cd_LAYOUT-18-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fe0c7e42cfe703_LAYOUT-13-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1080.jpg" alt="" />
            </div>
          </div>
          {/* // 5th row */}
          <div className={`rowDiv ${style.rowDiv} rowDiv5 mt-[-15%] flex flex-col gap-[2vw] `}> 
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd84ea0e4d87b20d630_LAYOUT-16-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd85edf60c6b4da45d7_LAYOUT-19-p-1600.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1080.jpg" alt="" />
            </div>
            <div className={`imgDiv ${style.imgDiv} `}>
              <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044e5242bb154e2c347_HF%204-p-1600.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
