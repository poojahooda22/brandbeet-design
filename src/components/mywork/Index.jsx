import React from 'react'

function Work() {
  return (
    <div className='part7 w-full h-[100vh] bg-primary text-secondary flex items-center justify-center'>
      <div className='ourWorktxt relative w-[60vw] h-[10vh] z-[9] '>
        <h1 className='our absolute top-0 left-[35%] sm:text-[5vw] -translate-x-1/2 -translate-y-1/2' >Our</h1>
        <h1 className='work absolute bottom-0 right-[35%] sm:text-[5vw] translate-x-1/2 translate-y-1/2' >Work</h1>
      </div>
      <div className='ourWorktxtDiv'>
          <div className='scrollWork'>
              <div className='scrollWorkImg'>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Work
