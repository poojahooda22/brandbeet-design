import React from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from './style.module.css'

gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.part2',
              start: '0% 70%',
              end: '50% 50%',
              scrub: 1,
            }
        })
        tl.to('.roundedDivWrapper', {
            height: 0,
            marginTop: 0,
        })

        gsap.to('.textAreaHover h2', {
            width: '100%',
            scrollTrigger: {
                trigger: '.content2',
                start: '50% 80%',
                end: '50% 50%',
                scrub: 1,
            }
        })
        gsap.to('.textAreaHover2 h2', {
            width: '100%',
            delay: 1,
            scrollTrigger: {
                trigger: '.content2',
                start: '30% 50%',
                end: '50% 50%',
                markers: true,
                scrub: 1,
            }
        })
    })
  return (
    <div className='part2 w-[100%] h-[100vh] bg-[#fff] '>
        
        {/* //rounded div */}
        <div className='hidden sm:flex roundedDivWrapper relative w-[100%] h-[100px]  overflow-hidden mt-[-5vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-[#fff]  absolute left-1/2 -translate-x-1/2 '></div>
        </div>
        <div className='content2 w-[100%] h-[100vh] relative flex items-center px-[5vw] sm:px-[2.5vw] overflow-hidden'>
            <div className='textArea absolute left-[2%] opacity-[.2] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Strategic design solutions</h2>
            </div>
            <div className='textAreaHover absolute left-[2%] opacity-100 text-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[0%]'>Strategic design solutions</h2>
            </div>
            <div className='textArea absolute left-[10%] mt-[18vw]  opacity-[.2] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>that fuel your bottom line.</h2>
            </div>
            <div className='textAreaHover2  absolute left-[10%] mt-[18vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[0%]'>that fuel your bottom line.</h2>
            </div>
        </div>

        <div className=' px-[5vw] sm:px-[2.5vw] flex items-center justify-between pb-[4vw]'>
            <h3 className='text-[1.2vw] text-[#858588] tracking-tight'>Unlock profit with monthly design sprints.</h3>
            <div className='cta flex items-center gap-[2vw]'>
                <div className={`ctaBook ${style.ctaBook} flex flex-col items-center justify-center
                 bg-black text-white h-[2vw] whitespace-nowrap `}>
                    <h3 className=''>Book a demo</h3>
                    <h3 className=''>Book a demo</h3>
                </div>
                <div className={`ctaBook ${style.ctaBook}`}>
                    <h3 className=''>View Pricing</h3>
                    <h3 className=''>View Pricing</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
