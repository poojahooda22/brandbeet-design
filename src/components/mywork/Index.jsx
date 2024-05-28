import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from './style.module.css'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function Work() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.part7',
        start: '50% 50%',
        end: '200% -150%',
        scrub: 1,
        pin: true,
      }
    })
    tl.to(".ourWorktxt", {
      height: '60vh',
    }, 'sc')
    tl.to(".ourWorktxtDiv", {
      height: '60vh',
    }, 'sc')
    tl.to('.our', {
      left: '0%'
    }, 'sc')
    tl.to('.work', {
      right: '0%'
    }, 'sc')
    tl.to('.scrollWorkImg', {
      marginTop: '-460%',
      duration: 4,
      ease: "expo.in",
    })   
  })


  return (
    <div className='part7 w-full h-[100vh] bg-primary text-secondary flex items-center justify-center overflow-hidden'>
      <div className='ourWorktxt absolute w-[75vw] sm:w-[60vw]  h-[0vh] z-[9] '>
        <h1 className='our absolute top-0 left-[30%] sm:left-[35%] text-[10vw] sm:text-[6vw] tracking-tighter -translate-x-1/2 -translate-y-1/2' >Our</h1>
        <h1 className='work absolute bottom-0 right-[40%] sm:right-[42%] text-[10vw] sm:text-[6vw] tracking-tighter  translate-x-1/2 translate-y-1/2' >Work</h1>
      </div>
      <div className='ourWorktxtDiv relative w-[75vw] sm:w-[60vw] flex items-center justify-center h-[0vh] overflow-hidden'>
          <div className='scrollWork w-[100%] h-[60vh] sm:h-[60vh] overflow-hidden'>
              <div className={`scrollWorkImg ${style.scrollWorkImg} w-[100%] mt-[0%]`}>
                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-2000.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>
                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1080.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>
                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd95bf2f4fe4cfdf9b9_LAYOUT-4-p-1600.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>
                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044e5242bb154e2c347_HF%204-p-1600.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>

                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044e5242bb154e2c347_HF%204-p-1600.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>
                <Image src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044e5242bb154e2c347_HF%204-p-1600.jpg" alt="" width={1000} height={100} className='w-[100%] h-[100%] object-cover'/>
                
                
               
                
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fee0b8d4e3a73c_LAYOUT-6-p-1600.jpg" alt="" />
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8106fa4f36fc39bb9_LAYOUT-17-p-1600.jpg" alt="" />
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8fa4742b8e1f3b6b8_LAYOUT-8-p-1600.jpg" alt="" />
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fe0c7e42cfe703_LAYOUT-13-p-1600.jpg" alt="" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Work
