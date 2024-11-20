import React from 'react'

function Contact() {
  return (
    <div className='h-fit p-4'>
      
      <div className='text-5xl text-zinc-950 font-semibold'>Contacts</div>
      <div className='flex -mt-2'>
        <div className='pl-16 text-gray-700 font-semibold mt-4' >Phone</div>
        <div className='pl-4 text-sm font-semibold mt-5 text-gray-800'><a 
    href="tel:+917303036689" 
    className="text-gray-900 hover:underline"
  >
    +91 7303036689
  </a> </div>
      </div>
      <div className='flex -mt-2'>
        <div className='pl-16 text-gray-700 font-semibold mt-2' >Email</div>
        <div className='pl-6 text-sm font-semibold mt-3 text-gray-800'><a 
    href="email:manubhav731@gmail.com" 
    className="text-gray-900 hover:underline"
  >
    manubhav731@gmail.com
  </a> </div>
      </div>
      <div className='flex -mt-2'>
        <div className=' rounded-full bg-zinc-950'></div>
        <div className='pl-16  font-semibold mt-2 text-blue-800'><a href="https://www.linkedin.com/in/anubhav-mishra-2b8175285/">LinkedIn</a></div>
      </div>
      <div className='flex -mt-2'>
        <div ></div>
        <div className='pl-16  font-semibold mt-2 text-emerald-800'><a href="https://github.com/Rheosta561">GitHub</a></div>
      </div>
      
    </div>
  )
}

export default Contact