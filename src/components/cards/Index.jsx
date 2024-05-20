import React from 'react';
import Image from 'next/image';

const Cards = () => {

    const data = [
        {
            title: "Growth and ROI",
            des: "Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures."
        },
        {
            title: "Top tier designers",
            des: "Expect the 1% only. Recruited from a global talent pool you’ll have access to some truly talented designers. Heavily vetted - we’ve hired the best to serve the great."
        },
        {
            title: "Stress free design",
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

  return (
    <div className='part3 w-full h-[100vh] bg-secondary px-[5vw] sm:px-[2.5vw] relative flex justify-between'>
        <div className='leftDiv w-1/2 h-[100%]  flex sm:flex-col justify-center'>
            <div className='sm:text-[8vw] tracking-tighter leading-[9vw]'>
                <h2>Expected</h2>
            </div>
            <div className='sm:text-[8vw] tracking-tighter leading-[9vw]'>
                <h2>Outcomes</h2>
            </div>
            <div className='mt-[2vw] w-[6.5vw] h-[6.5vw] bg-buttonPrimary rounded-full flex items-center justify-center'>
                <Image src='https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg' width={32} height={10} alt='line'/>
            </div>
        </div>
        <div className='w-2/5  rghtDiv flex flex-col gap-[5vw] mt-[6vw]'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='content flex flex-col gap-[2vw]'>
                        <h4 className='text-[2vw] '>{item.title}</h4>
                        <p className='text-[1.2vw] leading-[2vw] text-third'>{item.des}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards
