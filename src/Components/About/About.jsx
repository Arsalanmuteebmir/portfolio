import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt'
import myimg from "../../assets/myimg.png";
const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vh] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>Hi,I am </h1>
          <h2 className='text-4xl sm:4xl md:5xl text-bold text-white mb-4 leading-tight'>
            Arsalan Muteeb Mir
          </h2>
          {/*Typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a
            </span>
            <TypeAnimation
              sequence={[
                " Full Stack Developer",
                2000,
                " Coder",
                2000,
                " Learner",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>
          {/*About me*/}
          <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed'>
            I am a Full Stack Developer who enjoys building interactive,
            responsive, and performance-driven web applications.
            From crafting smooth front-end experiences to developing reliable back-end logic,
            I love working across the full stack.
            Learning new technologies and improving my problem-solving skills keeps me motivated every day.
          </p>
          {/* Resume button */}
          <a href="https://drive.google.com/file/d/1dQYHwEXpbTzFlst1VrkxxrkdUy0ZfBSU/view?usp=sharing"
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 '
          style={{
            background:'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}>Download CV
          </a>
        </div>
        {/* Right side */}
        <div className='md:w-1/2 flex justify-center md:justify-center'>
        <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
         tiltMaxAngleX={20}
         tiltMaxAngleY={20}
         perspective={1200}
         scale={1.05}
         transitionSpeed={1000}
         gyroscope={true}

         >
          <img src={myimg} alt="Arsalan Mir"
          className='w-full h-full rounded-full  object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
          />
        </Tilt>
          
        </div>
      </div>

    </section>
  )
}

export default About
