'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => { 
        setTab(id);
    })
  }

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
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab == "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab == "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab == "experience"}
                    >
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
            </div>
        </div>
    </section>)
}

export default AboutSection