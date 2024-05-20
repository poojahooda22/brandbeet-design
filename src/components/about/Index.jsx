import React from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from './style.module.css'
import apple from '../../../public/images/apple.svg'
import dell from '../../../public/images/dell.svg'
import hp from '../../../public/images/hp.svg'
import ibm from '../../../public/images/ibm.svg'
import oral from '../../../public/images/oral.svg'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger)

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
            duration: 1,
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
            duration: 1,
            scrollTrigger: {
                trigger: '.content2',
                start: '30% 50%',
                end: '50% 50%',
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
            <div className='textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Strategic design solutions</h2>
            </div>
            <div className='textAreaHover absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[0%]'>Strategic design solutions</h2>
            </div>
            <div className='textArea absolute sm:left-[10%] left-[5%] mt-[40vw] sm:mt-[18vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>that fuel your bottom line.</h2>
            </div>
            <div className='textAreaHover2  absolute left-[5%] sm:left-[10%] mt-[40vw] sm:mt-[18vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[0%]'>that fuel your bottom line.</h2>
            </div>
        </div>

        <div className=' px-[5vw] sm:px-[2.5vw] sm:flex items-center justify-between pb-[12vw] sm:pb-[4vw] '>
            <h3 className='text-[4vw] sm:text-[1.2vw] text-[#858588] tracking-tight mb-[4vw] sm:mb-0'>Unlock profit with monthly design sprints.</h3>
            <div className='cta flex items-center justify-between sm:gap-[1vw] cursor-pointer'>
                <div className='bg-black px-[10vw] py-[6vw] sm:px-[2.2vw] sm:py-[1.2vw] rounded-full'>
                    <div 
                        className={`ctaBook ${style.ctaBook} text-[4vw] sm:text-[1vw] tracking-tight
                         text-white h-[5.2vw] sm:h-[1.2vw] whitespace-nowrap overflow-hidden`}
                    >
                        <h3 className=''>Book a demo</h3>
                        <h3 className=''>Book a demo</h3>
                    </div>
                </div>
                <div className='bg-[#e1e1e1] px-[10vw] py-[6vw] sm:px-[2.2vw] sm:py-[1.2vw] rounded-full'>
                    <div 
                        className={`ctaBook ${style.ctaBook} text-[4vw] sm:text-[1vw] tracking-tight
                        text-[#111] h-[5.2vw] sm:h-[1.3vw] whitespace-nowrap overflow-hidden`}
                    >
                         <h3 className=''>View Pricing</h3>
                        <h3 className=''>View Pricing</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-black w-full h-[18vh] flex items-center justify-evenly'>
            <div>
                <Image src={apple} width={42} height={42} alt='apple' />
            </div>
            <div>
                <Image src={ibm} width={100} height={100} alt='apple' />
            </div>
            <div className=''>
                <Image src={dell} width={100} height={100} alt='apple' />
            </div>
            <div>
                <Image src={hp} width={42} height={42} alt='apple' />
            </div>
            <div>
                <Image src={oral} width={100} height={100} alt='apple' />
            </div>
        </div>
        
    </div>
  )
}

export default About
