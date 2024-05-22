import React from 'react'

function Work() {
  return (
    <div className='part7 w-full h-[100vh] bg-primary text-secondary flex items-center justify-center'>
      <div className='ourWorktxt absolute w-[60vw] h-[0vh] z-[9] '>
        <h1 className='our absolute top-0 left-[35%] sm:text-[6vw] tracking-tighter -translate-x-1/2 -translate-y-1/2' >Our</h1>
        <h1 className='work absolute bottom-0 right-[42%] sm:text-[6vw] tracking-tighter  translate-x-1/2 translate-y-1/2' >Work</h1>
      </div>
      <div className='ourWorktxtDiv relative w-[60vw] flex items-center justify-center h-[60vh] overflow-hidden'>
          <div className='scrollWork'>
              <div className='scrollWorkImg'>
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-2000.jpg" alt="" />
                <img className='w-[100%] h-[100%] object-cover' src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8e3fee0b8d4e3a67b_LAYOUT-5-p-1080.jpg" alt="" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Work
