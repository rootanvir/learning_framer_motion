import React, { FC } from 'react';
import Hero from "../components/main/Hero"
import './globals.css';
interface Props {
  
}

const Home: FC<Props> = ({  }) => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'> 
        <Hero />
      </div>
    </main>
  );
};
export default Home;