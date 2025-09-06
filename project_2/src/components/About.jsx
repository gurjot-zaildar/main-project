import React from 'react'
import Footer from './Footer'
const About = () => {
  return (
   <div className='bg-pink-50 '>
    <div className='bg-pink-200 text-center p-10  shadow-lg rounded-2xl'>
     <h1 className='font-bold text-4xl text-pink-600 '>About Us</h1>
     <p className='mt-5 lg:text-xl lg:mt-3 opacity-90'>Cooking made simple, creativ, and full of love.</p>
    </div>
    <div className='text-center mt-10 lg:mt-20'>
      <h1 className='text-2xl lg:text-3xl text-pink-600 font-medium'>Welcome to Create Recipe</h1>
      <p className='leading-7 opacity-90 p-4  lg:text-xl lg:w-3/4 lg:ml-auto lg:mr-auto' > Our mission is to make cooking fun, easy, and enjoyable for everyone. 
            Whether you’re a beginner or a passionate home cook, we share recipes 
            that bring people together and fill every moment with flavor.</p>
    </div>
    <h1 className='text-center text-2xl mt-10 font-medium text-pink-600 lg:mt-15'>Our Values</h1>
    <div className='lg:flex lg:ml-30 lg:mr-30 lg:mb-15 '>
      <div className='bg-white mt-10 lg:mt-15 lg:w-2/9 shadow hover:shadow-lg transition w-6/7 ml-auto mr-auto rounded-2xl p-3'>
     <i className="ri-lightbulb-line text-pink-700 text-5xl "></i>
       <h1 className='text-xl font-medium mt-4 lg:text-2xl'>Simplicity</h1>
       <p className='mt-2 leading-6 opacity-90 lg:mb-10 '>Cooking should be easy and approachable for everyone.</p>
      </div>

      <div className='bg-white mt-10 lg:mt-15 lg:w-2/9  shadow hover:shadow-lg transition w-6/7 ml-auto mr-auto rounded-2xl p-3'>
     <i className="ri-book-open-line text-pink-700 text-5xl "></i>
       <h1 className='text-xl font-medium mt-4 lg:text-2xl'>Creativity</h1>
       <p className='mt-2 leading-6 opacity-90 lg:mb-10'>Experiment with flavors and discover new ideas.</p>
      </div>

       <div className='bg-white mt-10 lg:mt-15 lg:w-2/9   shadow hover:shadow-lg transition w-6/7 ml-auto mr-auto rounded-2xl p-3'>
     <i className="ri-group-line text-pink-700 text-5xl "></i>
       <h1 className='text-xl font-medium mt-4 lg:text-2xl'>Family</h1>
       <p className='mt-2 leading-6 opacity-90 lg:mb-10'>Food is about bringing people closer together.</p>
      </div>

      <div className='bg-white mt-10 lg:mt-15 lg:w-2/9   shadow hover:shadow-lg transition w-6/7 ml-auto mr-auto rounded-2xl p-3'>
     <i className="ri-heart-line text-pink-700 text-5xl "></i>
       <h1 className='text-xl font-medium mt-4 lg:text-2xl '>Sharing</h1>
       <p className='mt-2 leading-6 opacity-90 lg:mb-10'>Knowledge and joy grow when shared.</p>
      </div>
    </div>
    
    <div className='lg:flex lg:w-7/9 lg:mr-auto lg:ml-auto'>
      <div className='mt-15 mb-7'>
        <img className='rounded-full lg:w-80 shadow-lg object-cover w-50 ml-auto mr-auto h-50' src="\src\public\img3.jpg" alt="" />
      </div>
      <div className='p-7'>
        <h1 className='text-2xl font-semibold text-pink-700 mb-6 '>Founder’s Note</h1>
        <p className='leading-7 opacity-90'> Hi, I’m <span className="font-semibold">Gurjot Singh</span>, the creator of 
              <span className="font-semibold"> Recipe Manager</span>. Cooking has always been 
              my passion — a way to relax, experiment, and bring happiness to loved ones. 
              I started this website to share my favorite recipes and inspire others to 
              enjoy the magic of homemade food.</p>
        <p className='leading-7 mt-6 mb-10'>For me, food is more than a meal — it’s a story, a memory, and love 
              served on a plate. Let’s cook, learn, and celebrate together! 🍴❤️</p>
      </div>
    </div>
   </div>
  )
}

export default About
