import Image from 'next/image'
import React from 'react'
import { Button } from './Button'

export const Hero = () => {
  return (
    <section className=' max-container padding-container 
     py-10 pb-32 flex flex-col 
    gap-20 md:gap-28 lg:py-20 xl:flex-row '>
        <div className='hero-map'/>


        <div className=' relative  flex flex-1 flex-col  lg:w-1/2'>
            <Image
            src={'/camp.svg'}
            alt='camp-icon'
            width={50}
            height={50}
            className=' absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] '
            />
            <h1 className=' bold-52 lg:bold-88'> Putuk Truno Camp Area</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
            </p>

            <div className=' my-11 flex flex-wrap gap-5 '>
                <div className=' flex items-center gap-2'>
                    {Array(5).fill(1).map((i , index)=>(
                        <Image
                        src={'/star.svg'}
                        alt='star icon'
                        width={24}
                        height={24}
                        />
                    ))}
                </div>
                <p className=' bold-16 lg:bold-20 text-blue-70'>
                    198k
                    <span className=' regular-16 lg:regular-20 ml-2 underline'>Excellent Reviews</span>
                </p>
                <div className=' flex flex-col sm:flex-row w-full'>
                    <Button
                    type='button'
                    variant='btn_green'
                    title='Download app'
                    />

                    <Button
                    type='button'
                    variant='btn_white_text'
                    title='How we work?'
                    icon='/play.svg'
                    />
                </div>
            </div>
        </div>
        <div className=' relative flex flex-1 items-start'>
                    <div className=' relative z-20 rounded-3xl w-[268px] flex flex-col gap-8 px-7 py-8 bg-green-90'>
                        <div className=' flex flex-col '>
                            <div className=' flexBetween'>
                                <p className=' regular-16 text-gray-20'> Location</p>
                                <Image
                                src={'/close.svg'}
                                width={24}
                                alt='close icon'
                                height={24}/>

                            </div>
                            <p className=' bold-20 text-white'> Aguas Calientes</p>
                        </div>
                    <div className=' flexBetween'>
                        <div className=' flex flex-col'>
                            <p className=' regular-16 text-gray-20'> Distance </p>
                            <p className=' bold-20 text-white '>
                                173.8 miles
                            </p>
                        </div>
                        <div className=' flex flex-col'>
                            <p className=' regular-16 text-gray-20'> Location </p>
                            <p className=' bold-20 text-white '>
                                2.040km
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
        
    </section>
  )
}
