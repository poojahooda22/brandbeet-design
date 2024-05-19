import React from 'react'
import style from './style.module.css'


const Navbar = () => {
  return (
    <div className='fixed w-full flex items-center justify-between px-[5vw] py-[4vw] sm:px-[2.5vw] cursor-pointer sm:py-[2vw] mix-blend-difference z-[2] '>
        <div className={`lftNav ${style.lftNav} h-[4.5vw] sm:h-[2vw]  overflow-hidden text-[4.5vw] leading-[5vw] sm:text-[1.5vw] sm:leading-[1.8vw] tracking-tighter text-[#fff]`}>
            <h1 className={`logo ${style.logo}`}>Brandbeet</h1>
            <h1 className=''>Brandbeet</h1>
        </div>
        <div className={`rghtNav ${style.rghtNav} h-[3.5vw] sm:h-[1.5vw] text-[3vw] leading-[4vw] overflow-hidden sm:text-[1vw] sm:leading-[1.4vw]  tracking-tight text-[#fff]`}>
            <h3 className=''>hello@brandbeet.com</h3>
            <h3 className=''>hello@brandbeet.com</h3>
        </div>
    </div>
  )
}

export default Navbar
