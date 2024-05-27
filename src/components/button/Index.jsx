import React from 'react';
import style from './style.module.css'

function Button({color, text, color2}) {
  return (
    <div className={`${color} px-[10vw] py-[6vw] sm:px-[2.2vw] sm:py-[1.2vw] rounded-full`}>
        <div 
            className={`ctaBook ${style.ctaBook} text-[4vw] sm:text-[1vw] tracking-tight
                ${color2} h-[5.2vw] sm:h-[1.4vw] whitespace-nowrap overflow-hidden`}
        >
            <h3 className=''>{text}</h3>
            <h3 className=''>{text}</h3>
        </div>
    </div>
  )
}

export default Button
