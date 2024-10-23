import React from "react";
import { delay, motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="border-b border-neutral-500 pb-4">
        <h1 className="my-20 text-center text-4xl">
          {" "}
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p8">
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1}}
            className="flex items-center justify-center">
              <img
                className="rounded-2xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIVOqsYK3t8HxkQ_WjwPoP2cwJiV1xDyWIw&s"
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div  whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 1}} className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit minima cupiditate temporibus quo architecto quod animi,
                quibusdam facere molestiae distinctio veritatis, ratione, non
                modi obcaecati? Neque consectetur enim, nihil accusamus quis
                placeat libero, rerum, a ea fugit corporis tenetur reprehenderit
                nesciunt. Quae dolore eius amet.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
