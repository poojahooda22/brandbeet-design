import React from 'react'

function Work() {
  return (
    <div className='w-full h-[100vh] bg-gray overflow-hidden'>


        <div className='hidden sm:flex roundedDivWrapper relative w-[100%] h-[100px]  overflow-hidden pt-[5vw] '>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-secondary  absolute left-1/2 bottom-0 -translate-x-1/2 '></div>
        </div>

        <div className=' w-[100%] h-[80vh] mt-[10vw] relative px-[5vw] sm:px-[2.5vw] overflow-hidden'>
            <div className='textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap '>
                <h2>Design services for</h2>
            </div>
            <div className='textAreaHover absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap '>
                <h2 className=' overflow-hidden w-[0%]'>Design services for</h2>
            </div>
            <div className='textArea absolute  mt-[40vw] sm:mt-[10vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2>profitable outcomes</h2>
            </div>
            <div className='textAreaHover2  absolute  mt-[40vw] sm:mt-[10vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap'>
                <h2 className='overflow-hidden w-[0%]'>profitable outcomes</h2>
            </div>
        </div>
    </div>
  )
}

export default Work
