import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4'>
        <div className='w-full shadow-xl flex flex-col p-2 md:my-0 my-6 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$140</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-4 mt-2'>500 GB Storage</p>
                <p className='py-2 border-b mx-4 mt-2'>1 Granted User</p>
                <p className='py-2 border-b mx-4 mt-2'>Send up to 2 GB</p>
            </div>
            <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>Start Trial</button>
        </div>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-2 my-6 md:my-0 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$140</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-4 mt-2'>500 GB Storage</p>
                <p className='py-2 border-b mx-4 mt-2'>1 Granted User</p>
                <p className='py-2 border-b mx-4 mt-2'>Send up to 2 GB</p>
            </div>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-2 md:my-0 my-6 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$140</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-4 mt-2'>500 GB Storage</p>
                <p className='py-2 border-b mx-4 mt-2'>1 Granted User</p>
                <p className='py-2 border-b mx-4 mt-2'>Send up to 2 GB</p>
            </div>
            <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
