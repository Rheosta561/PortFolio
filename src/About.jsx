import React from 'react'

function About() {
  return (
    <div className='bg-zinc-100 h-fit pb-4 flex-col'>
        <div className='text-6xl font-semibold pt-4 pl-4'>About</div>
        <div className='pl-4 pt-2 text-xs md:text-sm'>I am a dedicated web developer with a keen eye for modern design principles, specializing in creating visually stunning and highly responsive user interfaces using Tailwind CSS and Material UI. My approach combines technical proficiency with a deep appreciation for user-centric design, ensuring seamless digital experiences. Beyond the world of code, I am an avid music producer and sound designer, constantly exploring new ways to merge creativity and technology to craft captivating audio experiences. This unique blend of skills fuels my innovative approach to both web development and artistic endeavors.</div>
        <div className='text-xl pl-4 pt-2 font-semibold text-gray-900'>Education</div>
        <ul className='pl-6 text-gray-700 text-xs md:text-sm'><li><span className='text-gray-800'>Btech Software Engineering</span> - Delhi Technological university (8.4 cgpa)</li>
        <li><span className='text-gray-800'>Class 12th</span> - Rosary Senior Secondary School (91.2%)(PCM)</li>
        <li><span className='text-gray-800'>Class 10th</span> - Rosary Senior Secondary School (94.6%)</li>
        </ul>
        <div className='pl-4 pt-3 font-bold' >Curriculum Vitae     <span> <a href="https://drive.google.com/file/d/1Y_HLmmvnmUc32jBmUkiIOAWc3esYcYLX/view?usp=sharing" className='text-blue-800 text-sm'>Link</a></span></div>
    </div>
  )
}

export default About