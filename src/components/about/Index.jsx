import React from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.part2',
              start: '50% 50%',
              end: '250% 50%',
              markers: true,
              scrub: 1,
              pin: true,
            }
        })
    })
  return (
    <div className='part2 w-[100%] h-[100vh] bg-[#fff] '>
        
        {/* //rounded div */}
        <div className='roundedDivWrapper relative w-[100%] h-[100px]  overflow-hidden mt-[-5vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%]  absolute left-1/2 -translate-x-1/2 '></div>
        </div>
        {/* <div className='w-[100%] flex items-center justify-start px-[5vw] sm:px-[2.5vw]'>
            <div className='text-[10vw] leading-[13vw] sm:text-[7vw] sm:leading-[9vw] tracking-tighter sm:whitespace-nowrap text-[#e2e2e2]'>
                <h2>Strategic design solutions</h2>
                <h2 className='sm:ml-[14vw]'>the fuel your bottom line.</h2>
            </div>
        </div> */}
        
    </div>
  )
}

export default About
