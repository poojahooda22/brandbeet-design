import React from 'react'
import style from './style.module.css'


const Navbar = () => {
  return (
    <div className='fixed w-full flex items-center justify-between px-[5vw] py-[4vw] sm:px-[2.5vw] cursor-pointer sm:py-[2vw] mix-blend-difference z-[2] '>
        <div className={`lftNav ${style.lftNav} h-[3.5vh]  sm:h-[4vh] overflow-hidden text-[4.5vw] leading-[5vw] sm:text-[1.5vw] sm:leading-[1.8vw] tracking-tighter text-[#fff]`}>
            <h1 className={`logo ${style.logo}`}>Brandbeet</h1>
            <h1 className=''>Brandbeet</h1>
        </div>
        <div className={`rghtNav ${style.rghtNav} h-[3.2vh]  sm:h-[3vh] text-[3vw] leading-[4vw] overflow-hidden md:text-[1vw] sm:leading-[1.4vw]  tracking-tighter text-[#fff]`}>
            <h3 className=''>hello@brandbeet.com</h3>
            <h3 className=''>hello@brandbeet.com</h3>
        </div>
    </div>
  )
}

export default Navbar
