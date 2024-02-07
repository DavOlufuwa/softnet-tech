import React from 'react'
import HeroImage from '/hero-img.svg'

const Hero = () => {
  return (
    <div className='c-container bg-blues flex flex-col items-center'>
      <div className='pt-5 text-center'>
        <h1 className='text-4xl font-extrabold leading-[50px] mb-3'>
          Want anything to be easy with <span className='text-t-blue font-black'>SoftNet</span> Technologies
        </h1>
        <small className='text-sm'>
          Provide a network for all your needs with ease and fun using <span>Softnet Technologies</span>. Discover interesting features from us.
        </small>
      </div>
      <div className=''>
        <img src={HeroImage} alt='an hero image showing a computer with a set of books and certificates' className='min-w-[350px] '/>
      </div>
    </div>
  )
}

export default Hero