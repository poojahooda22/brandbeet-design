import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function CurvedSec() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.part5Work',
              start: '0% 70%',
              end: '50% 50%',
              scrub: 1,
              markers:  true,
            }
        })
        tl.to('.roundedDivWrapper2', {
            height: 0,
            paddingTop: 0,
        })

        gsap.to('.textAreaHover4 h2', {
            width: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.part5Work',
                start: '50% 80%',
                end: '50% 50%',
                scrub: 1,
            }
        })
        gsap.to('.textAreaHover5 h2', {
            width: '100%',
            delay: 2,
            duration: 2,
            scrollTrigger: {
                trigger: '.part5Work',
                start: '30% 50%',
                end: '50% 50%',
                scrub: 1,
            }
        })
    })


  return (
    <div className='part5Work w-full h-[100vh] bg-gray overflow-hidden'>


        <div className='hidden sm:flex roundedDivWrapper2 relative w-[100%] h-[100px]  overflow-hidden pt-[5vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-secondary  absolute left-1/2 bottom-0 -translate-x-1/2 '></div>
        </div>

        <div className='WorkSec w-[100%] h-[50vh] mt-[10vw] relative px-[5vw] sm:px-[2.5vw] overflow-hidden'>
            <div className='textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Design services for</h2>
            </div>
            <div className='textAreaHover4 absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[0%]'>Design services for</h2>
            </div>
            <div className='textArea absolute  mt-[40vw] sm:mt-[10vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>profitable outcomes</h2>
            </div>
            <div className='textAreaHover5  absolute  mt-[40vw] sm:mt-[10vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[0%]'>profitable outcomes</h2>
            </div>
        </div>
    </div>
  )
}

export default CurvedSec
