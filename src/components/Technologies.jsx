import React from "react";
import { RiFirebaseFill, RiNodejsFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiDotnet, DiMsqlServer, DiMysql, DiPython } from "react-icons/di";
import { delay, motion } from "framer-motion";

const iconsvariants = (duration, delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <div className="my-20 text-center text-4xl">Technologies</div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsvariants(1.5, 0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine
            className="text-7xl
             text-cyan-400
             "
          />
          <p className="text-center">react js</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.2)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsFill
            className="text-7xl
             text-green-500
             "
          />
          <p className="text-center">node js</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.3)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMsqlServer
            className="text-7xl
             text-red-800
             "
          />
          <p className="text-center">SQL</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.4)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb
            className="text-7xl
             text-green-600
             "
          />
          <p className="text-center">mongoDB</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.5)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql
            className="text-7xl
             text-cyan-400
             "
          />
          <p className="text-center">mySql</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.6)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiDotnet
            className="text-7xl
             text-blue-200
             "
          />
          <p className="text-center">ASP.net API</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.7)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPython
            className="text-7xl
             text-yellow-300
             "
          />
          <p className="text-center">IA (soon..)</p>
        </motion.div>
        <motion.div
          variants={iconsvariants(1.5, 0.8)}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFirebaseFill
            className="text-7xl
             text-yellow-500
             "
          />
          <p className="text-center">firebase</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
