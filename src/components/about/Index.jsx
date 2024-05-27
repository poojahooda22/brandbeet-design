import React from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import apple from '../../../public/images/apple.svg'
import dell from '../../../public/images/dell.svg'
import hp from '../../../public/images/hp.svg'
import ibm from '../../../public/images/ibm.svg'
import oral from '../../../public/images/oral.svg'
import Image from 'next/image';
import Button from '../button/Index';

gsap.registerPlugin(ScrollTrigger)

function About() {

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px", () => {
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
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: '.content2',
                    start: '30% 50%',
                    end: '50% 50%',
                    scrub: 1,
                }
            })
        })

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

        
    })
  return (
    <div className='part2 w-[100%] bg-secondary'>
        
        {/* //rounded div */}
        <div className='hidden sm:flex roundedDivWrapper relative w-[100%] h-[100px]  overflow-hidden mt-[-3.7vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-secondary absolute left-1/2 -translate-x-1/2 '></div>
        </div>
        <div className='content2 w-[100%] h-[50vh] sm:h-[100vh] relative flex items-center px-[5vw] sm:px-[2.5vw] overflow-hidden'>
            <div className='textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Strategic design solutions</h2>
            </div>
            <div className='textAreaHover absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[100%] sm:w-[0%]'>Strategic design solutions</h2>
            </div>
            <div className='textArea absolute sm:left-[10%] left-[5%] mt-[40vw] sm:mt-[18vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>that fuel your bottom line.</h2>
            </div>
            <div className='textAreaHover2  absolute left-[5%] sm:left-[10%] mt-[40vw] sm:mt-[18vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[100%] sm:w-[0%]'>that fuel your bottom line.</h2>
            </div>
        </div>

        <div className=' px-[5vw] sm:px-[2.5vw] sm:flex items-center justify-between pb-[12vw] sm:pb-[4vw] pt-[14vw] sm:pt-0'>
            <h3 className='text-[4vw] sm:text-[1.2vw] text-textComplimentary tracking-tight mb-[4vw] sm:mb-0'>Unlock profit with monthly design sprints.</h3>
            <div className='cta flex items-center justify-between sm:gap-[1vw] cursor-pointer'>
                <Button color='bg-primary' text='Book a demo' color2='text-secondary' />
                <Button color='bg-gray'  text='View Pricing' color2='text-primary' />
            </div>
        </div>

        <div className='bg-primary w-full h-[16vh] sm:h-[18vh] flex items-center justify-center gap-[6vw] sm:justify-evenly'>
            <div>
                <Image src={apple}  className='w-[7vw] sm:w-[3vw]' alt='apple' />
            </div>
            <div>
                <Image src={ibm} className=' w-[12vw] sm:w-[6vw]' alt='apple' />
            </div>
            <div className=''>
                <Image src={dell}  className=' w-[12vw] sm:w-[6vw]' alt='apple' />
            </div>
            <div>
                <Image src={hp} className=' w-[8vw] sm:w-[3vw]' alt='apple' />
            </div>
            <div>
                <Image src={oral} className=' w-[14vw] sm:w-[6vw]' alt='apple' />
            </div>
        </div>
        
    </div>
  )
}

export default About
