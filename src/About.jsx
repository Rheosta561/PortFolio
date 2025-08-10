import React from 'react'

function About() {
  return (
    <div className='bg-zinc-100 h-fit pb-4 flex-col dark:bg-zinc-950'>
        <div className='text-6xl font-semibold pt-4 pl-4 dark:text-zinc-300'>About</div>
        <div className='pl-4 pt-2 text-xs md:text-sm dark:text-gray-200'>I am a dedicated web developer with a keen eye for modern design principles, specializing in crafting visually stunning and highly responsive user interfaces using Tailwind CSS and Material UI. My work is rooted in technical precision and a strong focus on user-centric design, ensuring seamless and engaging digital experiences.
In addition to front-end development, I am a competitive programmer, continuously sharpening my problem-solving skills through algorithmic challenges and real-time coding contests. I also build cross-platform mobile applications, leveraging frameworks like React Native to deliver smooth and consistent user experiences across devices.
Beyond code, I am an avid music producer and sound designer, always exploring new ways to blend creativity and technology to produce captivating audio experiences. This diverse skill set fuels my innovative approach across both development and artistic domains.</div>
        <div className='text-xl pl-4 pt-2 font-semibold text-gray-900 dark:text-gray-400'>Education</div>
        <ul className='pl-6 text-gray-700 dark:text-gray-400 text-xs md:text-sm'><li><span className='text-gray-800 dark:text-gray-500'>Btech Software Engineering</span> - Delhi Technological university (8.4 cgpa)</li>
        <li><span className='text-gray-800 dark:text-gray-500'>Class 12th</span> - Rosary Senior Secondary School (91.2%)(PCM)</li>
        <li><span className='text-gray-800 dark:text-gray-500'>Class 10th</span> - Rosary Senior Secondary School (94.6%)</li>
        </ul>
        <div className='pl-4 pt-3 font-bold dark:text-zinc-400' >Curriculum Vitae     <span> <a href="https://drive.google.com/file/d/1HdEs2Fty-gKRO7sQVa5okA1lVF9P6Hg-/view?usp=drive_link" className='text-blue-800 text-sm'>Link</a></span></div>
    </div>
  )
}

export default About