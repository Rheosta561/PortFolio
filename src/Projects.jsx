import React from 'react'
import mitr from './mitr.png'
import aayushi from './aayushi.png'
import expee from './expee.png'
import maargway from './Maargway.png'
import muktirath from './MuktiRath.png'
import preacherClan from './PreacherClan.png'
import ravenImage from './Raven.png'

function Projects() {
  return (
    <div className='p-4 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 h-fit'>
        <div className='text-6xl font-semibold'>Projects</div>
    <div className="flex flex-wrap md:grid md:grid-cols-3 flex-col gap-4 pt-4">
      <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
  <div className='h-60 rounded-lg bg-zinc-950'>
    <img src={ravenImage} className='h-full w-full rounded-lg  object-contain' alt="Raven" />
  </div>
  <div className='text-zinc-950 text-xl font-semibold pt-2'>Raven — Your Call for Justice</div>
  <div className='w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white bg-emerald-950'>
    <a href="https://raven-self.vercel.app" target="_blank" rel="noopener noreferrer">Visit</a>
  </div>
</div>

      <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
        <img src={preacherClan}  className='h-full  w-full rounded-lg object-right-top object-cover 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>PreacherClan - Crafting Fitness</div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white bg-emerald-950'><a href="https://preacherclan.vercel.app">Visit</a></div>
        
      </div>

    <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
        <img src={muktirath}  className='h-full  w-full rounded-lg object-right-top object-cover 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>MuktiRath-Protecting The Forced Queens</div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white bg-emerald-950'><a href="https://muqtirath.vercel.app">Visit</a></div>
        
      </div>
    <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
        <img src={maargway}  className='h-full  w-full rounded-lg object-right-top object-cover 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>MaargWay - AI Recommendation System</div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white bg-emerald-950'><a href="https://maargway.vercel.app">Visit</a></div>
        
      </div>
      <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
            <img src={mitr}  className='h-full  w-full rounded-lg 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>Mitrjeevanini - AI Mental Health Assistant</div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white  bg-emerald-950'><a href="https://mitrjeevani-tech-volsung.vercel.app">Visit</a></div>
        
      </div>

      <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
        <img src={aayushi}  className='h-full  w-full rounded-lg 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>Aayushi - AI Powered Ticketing System</div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white  bg-emerald-950'><a href="https://github.com/Rheosta561/Museum-chatbot-prototype">Visit</a></div>
        
      </div>
      <div className="flex-1 bg-gray-200 h-fit text-white p-2 rounded-lg text-center flex-col hover:scale-105 transition-all">
        <div className='h-60  rounded-lg bg-zinc-950'>
        <img src={expee}  className='h-full  w-full rounded-lg 'alt="" />
        </div>
        <div className='text-zinc-950 text-xl font-semibold pt-2'>ExPee Store - Personalised Beat Store </div>
        <div className=' w-1/5 h-8 text-center text-zinc-50 m-auto mt-2 rounded-full py-2 text-sm hover:text-white bg-emerald-950'><a href="https://github.com/Rheosta561/ExPee-Music">Visit</a></div>
        
      </div>
      
    </div>
    </div>
  )
}

export default Projects