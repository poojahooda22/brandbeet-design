import React from 'react'
import style from './style.module.css'
import { useGSAP } from '@gsap/react'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useGSAP(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: '.part7',
        //       start: '50% 50%',
        //       end: '200% 50%',
        //       scrub: 1,
        //       pin: true,
        //     }
        // })
    })
  return (
    <div className='relative h-[100vh]'
        style={{clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)'}}
    >
        <div className='relative h-[calc(100vh+100vh)] -top-[100vh]'>
            <div className='sticky top-[calc(100vh-100vh)] h-[100vh]'>
                <div className='w-full h-[100vh] bg-secondary flex items-center justify-center relative'>
                    <div className='w-full flex flex-col items-center'>
                        <div className=' flex flex-col items-center justify-between'>
                            <h2 className='sm:text-[8vw] tracking-tighter'>
                                <span>B</span>
                                <span>r</span>
                                <span>a</span>
                                <span>n</span>
                                <span>d</span>
                                <span>b</span>
                                <span>e</span>
                                <span>e</span>
                                <span>t</span>
                            </h2> 
                            <div className='sm:text-[1.5vw] text-center tracking-tighter'>
                                <div>
                                    <p>Get a personal overview of how we work and the</p>
                                </div>
                                <div>
                                    <p>commercial impact of good great design.</p>
                                </div>
                            </div>
                            <div className='bg-primary px-[6vw] py-[4vw] sm:px-[2.2vw] sm:py-[1.2vw] rounded-full cursor-pointer sm:mt-[3vw]'>
                                <div 
                                    className={`ctaBook ${style.ctaBook} text-[4vw] sm:text-[1vw]
                                    text-secondary h-[5.2vw] sm:h-[1.3vw] whitespace-nowrap overflow-hidden`}
                                >
                                    <h3 className=''>Book a Demo</h3>
                                    <h3 className=''>Book a Demo</h3>
                                </div>
                            </div>
                        </div>   
                        <h5 className='absolute bottom-10'>© Brandbeet 2023</h5>
                    </div>   
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
