import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    Hello, I'm Dhanika
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                    Gammac thamai mn ithin. Dannawane scene eka!
                </p>
            </div>
            <div className='col-span-5'>
                <div className="rounded-full bg-[#181818] w-500 h-400 relative">
                    <Image
                        src='/images/Hero.png'
                        alt='Hero Image'
                        width={300}
                        height={300}
                    />
                </div>   
            </div>
        </div>
    </section>
  );  
};

export default HeroSection