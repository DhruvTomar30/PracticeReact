import React from 'react'

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full mx-auto text-center flex flex-col justify-center h-screen'>
        <p className='text-[#00df9a] font-bold '>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing</p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTC,BTC,& SASS platforms.</p>
        <button className='bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-auto px-3 p-2 '>Get Started</button>
      </div>
    </div>
  );
};

export default Hero
