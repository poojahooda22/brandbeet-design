import React from 'react'

function About() {
  return (
    <div className='part2 w-[100%] h-[100vh] bg-[#fff] '>
        
        {/* //rounded div */}
        <div className='roundedDivWrapper relative w-[100%] h-[100px] bg-green-400 overflow-hidden'>
            <div className='roundedDiv w-[150%] h-[750%] rounded-[50%] bg-[red] absolute left-1/2 -translate-x-1/2'></div>
        </div>
        {/* <div className='w-[100%] flex items-center justify-start px-[5vw] sm:px-[2.5vw]'>
            <div className='text-[10vw] leading-[13vw] sm:text-[7vw] sm:leading-[9vw] tracking-tighter sm:whitespace-nowrap text-[#e2e2e2]'>
                <h2>Strategic design solutions</h2>
                <h2 className='sm:ml-[14vw]'>the fuel your bottom line.</h2>
            </div>
        </div> */}
        
    </div>
  )
}

export default About