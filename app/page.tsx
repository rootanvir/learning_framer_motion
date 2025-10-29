import React, { FC } from 'react';
import Hero from "../components/main/Hero"
import './globals.css';
import SkillDataProvider from '@/components/sub/SkillDataProvider';
import Skills from '@/components/main/Skills';
import Encryption from '@/components/main/Encryption';
interface Props {
  
}

const Home: FC<Props> = ({  }) => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'> 
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
};
export default Home;