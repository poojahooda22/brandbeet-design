import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function Summary() {
  
  useGSAP(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.part4Sum',
    //     start: '50% 100%',
    //  
    //   }
    // })
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px", () => {
      gsap.to('.textAreaHover2 h2', {
        width: '100%',
        duration: 1,
        scrollTrigger: {
          trigger: '.part4Sum',
          start: '50% 70%',
          end: '50% 50%',
          scrub: 1,
        }
      })
      gsap.to('.textAreaHover3 h2', {
        width: '100%',
        delay: 2,
        duration: 2,
        scrollTrigger: {
          trigger: '.part4Sum',
          start: '30% 40%',
          end: '50% 50%',
          scrub: 1,
        }
      })
    })
  
  })


  return (
    <div className='part4Sum w-full h-[50vh] sm:h-[100vh] bg-secondary mt-[-10%]'>
      <div className='part4Content w-full  flex flex-col items-center justify-center pt-[10vw] '>
        <h5 className='sumtext text-[8vw] sm:text-[2.5vw] text-textComplimentary tracking-tighter'>In summary..</h5>
        <div className=' sm:mt-[5%] mt-[10vw]'>
          <div className='textArea absolute left-[7%] sm:left-[20%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
            <h2 className='text-center'>A dedicated team at</h2>
          </div>
          <div className='textAreaHover2 absolute left-[7%] sm:left-[20%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
            <h2 className=' overflow-hidden w-[100%] sm:w-[0%]'>A dedicated team at</h2>
          </div>
          <div className='textArea absolute sm:left-[30%] left-[18%] mt-[12vw] sm:mt-[10vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
            <h2 className='text-center'>your disposal.</h2>
          </div>
          <div className='textAreaHover3  absolute left-[18%] sm:left-[30%] mt-[12vw] sm:mt-[10vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
            <h2 className='overflow-hidden w-[100%] sm:w-[0%] '>your disposal.</h2>
          </div>
        </div>     
      </div> 
    </div>
  )
}

export default Summary
