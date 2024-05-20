import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Cards = () => {

    const data = [
        {
            title: "Growth and ROI",
            des: ""
        },
        {
            title: "",
            des: "Expect the 1% only. Recruited from a global talent pool you’ll have access to some truly talented designers. Heavily vetted - we’ve hired the best to serve the great."
        },
        {
            title: "",
            des: "Expect no extra charge if things need changing. It’s all about you. It’ll be iterated on until you are 100% happy. Once done expect design you and your mom can be proud of."
        },
        {
            title: "Flexible and scalable",
            des: "Expect flexibility and fluidity. Pause or cancel anytime. Need more resources? No problem. You’ve just found your elastic design on demand team."
        },
        {
            title: "Predictability",
            des: "Expect peace of mind. Say goodbye to hidden costs and designers who are unavailable when you need them most. Expect reliable consistent quality that exceeds expectations."
        },

    ]

    const contentRefs = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.part3',
              start: '50% 50%',
              end: '200% 50%',
              scrub: 1,
              markers: true,
              pin: true,
            }
        })
        tl.to(contentRefs.current[1], {
            marginTop: "-50%",
            opacity: 1,
        }, 'sct1')
        tl.to(contentRefs.current[2], {        
            opacity: 1,
        }, 'sct2')
        tl.to(contentRefs.current[1], {
            marginTop: "-100%",
            opacity: 0,
        }, 'sct2')
        tl.to(contentRefs.current[3], {        
            opacity: 1,
        }, 'sct3')
        tl.to(contentRefs.current[1], {
            marginTop: "-150%",
            opacity: 0,
        }, 'sct3')
        tl.to(contentRefs.current[4], {        
            opacity: 1,
        }, 'sct4')
        tl.to(contentRefs.current[1], {
            marginTop: "-200%",
            opacity: 0,
        }, 'sct4')
        tl.to(contentRefs.current[5], {        
            opacity: 1,
        }, 'sct5')
        tl.to(contentRefs.current[1], {
            marginTop: "-250%",
            opacity: 0,
        }, 'sct5')
    })

  return (
    <div className='part3 w-full h-[100vh] bg-secondary px-[5vw] sm:px-[2.5vw] relative flex flex-col pt-[4vw] sm:mt-0 sm:flex sm:flex-row sm:justify-between'>
        <div className='leftDiv  w-full sm:w-1/2 sm:h-[100%] py-[16vw] sm:py-0 flex flex-col gap-[6vw] sm:gap-0 sm:justify-center'>
           <div className='flex gap-[2vw] sm:gap-0 sm:flex-col'>
                <div className='text-[9vw] sm:text-[8vw] tracking-tighter leading-[9vw]'>
                    <h2>Expected</h2>
                </div>
                <div className='text-[9vw] sm:text-[8vw] tracking-tighter leading-[9vw]'>
                    <h2>Outcomes</h2>
                </div>
            </div>
            <div className='mt-[2vw] w-[14vw] h-[14vw] sm:w-[6.5vw]  sm:h-[6.5vw] bg-buttonPrimary rounded-full flex items-center justify-center'>
                <Image src='https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg' width={32} height={10} alt='line' className='w-[4vw] sm:w-[2vw]'/>
            </div>
        </div>
        <div className='w-full sm:w-2/5 h-[200%]  rghtDiv flex flex-col gap-[18vw] sm:gap-[6vw] mt-[24vw] sm:mt-[32%]'> 
            <div className={`content flex flex-col gap-[4vw] sm:gap-[2vw] opacity-1 `}>
                <h4 className='text-[7vw] sm:text-[2vw] tracking-tighter'>Growth and ROI</h4>
                <p className='text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third'>Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.</p>
            </div>
            <div className={`content flex flex-col gap-[4vw] sm:gap-[2vw] opacity-1 `}>
                <h4 className='text-[7vw] sm:text-[2vw] tracking-tighter'>Top tier designers</h4>
                <p className='text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third'>Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.</p>
            </div>
            <div className={`content flex flex-col gap-[4vw] sm:gap-[2vw] opacity-1 `}>
                <h4 className='text-[7vw] sm:text-[2vw] tracking-tighter'>Stress free design</h4>
                <p className='text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third'>Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.</p>
            </div>
            <div className={`content flex flex-col gap-[4vw] sm:gap-[2vw] opacity-1 `}>
                <h4 className='text-[7vw] sm:text-[2vw] tracking-tighter'>Growth and ROI</h4>
                <p className='text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third'>Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.</p>
            </div>

        </div>
    </div>
  )
}

export default Cards
