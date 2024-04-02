import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return(
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src='/images/About.png'
                alt='About Image'
                width={500}
                height={500}
            />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a Full Stack and Mobile Application Developer, 
                weaving digital experiences that resonate with users on a profound 
                level. With expertise in front-end frameworks coupled with back-end technologies, I architect 
                robust systems that power seamless user interfaces. My passion lies in crafting 
                immersive mobile experiences for platforms like iOS and Android, where each 
                line of code is a narrative waiting to unfold. From e-commerce platforms 
                redefining online shopping to social networking apps fostering meaningful 
                connections, my portfolio is a testament to the endless possibilities of 
                technology.
                </p>
                <div className='flex flex-row mt-8'>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-[#e05b16]'>Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                </div>
            </div>
        </div>
    </section>)
}

export default AboutSection