"use client"

import React from "react"
import { motion, useAnimation, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface Props {
  src: string
  width: number
  height: number
  index: number
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="mx-auto"
      />
    </motion.div>
  )
}

export default SkillDataProvider
