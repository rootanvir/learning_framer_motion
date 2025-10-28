'use client'

import React, { FC } from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid';
import '../../app/globals.css';
interface Props {

}

const HeroContent: FC<Props> = ({ }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
                >
                    Providing
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best
                        project experience
                        <motion.div
                            variants={slideInFromLeft(0.8)}
                            className='text-lg text-gray-400 mt-5 max-w-[600px]'
                        >
                            I&apos;m a Full Stack Software Engineer with experience in Website,
                            Mobile, and Software development. Check out my projects and skills.
                        </motion.div>
                        <motion.a
                        variants={slideInFromLeft(1)}
                        className='py-2 btt'
                        >

                        </motion.a>
                    </span>

                </motion.div>

            </div>

        </motion.div>
    );
};

export default HeroContent;