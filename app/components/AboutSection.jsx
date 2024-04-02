'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React</li>
                <li>Spring</li>
                <li>JavaScript</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li className='font-bold list-disc pl-2'>BSc. (Hons) in Software Engineering,</li>
                <li className='pl-2'>University of Kelaniya</li>
                <li className='font-bold list-disc pl-2 pt-2'>Bachelor in Information Technology,</li>
                <li className='pl-2'>University of Colombo</li>
                <li className='list-disc pl-2 pt-2'><span className='font-bold'>Diploma in Software Engineering, </span>NIBM</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Coursera - Developing Frontend Apps with React</li>
                <li className='pt-2'>Udemy – HTML/CSS/PHP/JAVASCRIPT all in one course</li>
                <li className='pt-2'>Udemy - Java Programming and Spring Boot Microservices</li>
            </ul>
        )
    }

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
    return (
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/About2.png" width={500} height={500} />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg ">
            I am a Full Stack and Mobile Application Developer, weaving digital experiences that resonate 
            with users on a profound level. With expertise in front-end frameworks, coupled with back-end 
            technologies, I architect robust systems that power seamless user interfaces.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;