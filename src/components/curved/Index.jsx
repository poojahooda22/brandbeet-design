import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnderLine from '../Underline/Index';
import style from './style.module.css'

gsap.registerPlugin(ScrollTrigger)

function CurvedSec() {

    useGSAP(() => {

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px", () => {
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
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.part5Work',
              start: '0% 70%',
              end: '50% 50%',
              scrub: 1,
            }
        })
        tl.to('.roundedDivWrapper2', {
            height: 0,
            paddingTop: 0,
        })   
    })


  return (
    <div className='part5Work w-full h-[50vh] sm:h-[140vh] bg-gray overflow-hidden'>
        <div className='hidden sm:flex roundedDivWrapper2 relative w-[100%] h-[100px]  overflow-hidden pt-[5vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-secondary  absolute left-1/2 bottom-0 -translate-x-1/2 '></div>
        </div>
        

        <div className='WorkSec w-[100%]  h-[50vh] sm:h-[80vh] mt-[25vw] sm:mt-[10vw] relative px-[5vw] sm:px-[2.5vw] overflow-hidden'>
            <div className='textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Design services for</h2>
            </div>
            <div className='textAreaHover4 absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[100%] sm:w-0'>Design services for</h2>
            </div>
            <div className='textArea absolute  mt-[12vw] sm:mt-[10vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>profitable outcomes</h2>
            </div>
            <div className='textAreaHover5  absolute  mt-[12vw] sm:mt-[10vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[100%] sm:w-0'>profitable outcomes</h2>
            </div>
        </div>

        <div className='px-[5vw] sm:px-[2.5vw] mt-[-35%]  sm:mt-[-8%]'>
            <UnderLine marginBottom='0vw' marginTop='0vw' />
        </div>

        <div className='w-full px-[5vw] sm:px-[2.5vw] py-[4vw] flex items-center '>
            <h3 className='w-1/2 text-[4vw] '>Brand</h3>
            <div className='z-[8]'>
            <div className='bg-primary px-[10vw] py-[6vw] sm:px-[2.2vw] sm:py-[1.2vw] rounded-full cursor-pointer'>
                    <div 
                        className={`ctaBook ${style.ctaBook} text-[4vw] sm:text-[1vw] tracking-tight
                         text-secondary h-[5.2vw] sm:h-[1.3vw] whitespace-nowrap overflow-hidden`}
                    >
                        <h3 className=''>View Pricing</h3>
                        <h3 className=''>View Pricing</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-[5vw] sm:px-[2.5vw] '>
            <UnderLine marginBottom='0vw' marginTop='0vw' />
        </div>

        <div className='w-full px-[5vw] sm:px-[2.5vw] py-[4vw] flex items-center '>
            <h3 className='w-1/2 text-[4vw] '></h3>
            <div className='z-[8]'>
                <h4 className='sm:text-[2vw]'>1-2 weeks average/2 dsign sprints</h4>
                <div>
                    <h5>Logo design</h5>
                    <h5>Visual Identity</h5>
                    <h5>Collateral</h5>
                    <div>
                        <h5>Logo design</h5>
                        <h5>Visual Identity</h5>
                        <h5>Collateral</h5>
                    </div>
                </div>
            </div>
        </div>
          
    </div>
  )
}

export default CurvedSec
