import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div  className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb=16 mb-3 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Gregorio Caba
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FULL STACK DEVELOPER
            </motion.span>
            <motion.p
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fuga,
              consequatur perspiciatis quo aspernatur magni iusto officia cum,
              totam dolores doloremque? Itaque reprehenderit quia repellendus
              quibusdam accusantium, explicabo aperiam aspernatur nostrum.
              Voluptatum omnis voluptatibus libero quas obcaecati sunt ea eos,
              animi inventore rem esse odio aspernatur incidunt, tempora nisi
              qui.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div  className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
