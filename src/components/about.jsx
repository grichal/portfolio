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
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center"
            >
              <img
                className="rounded-2xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIVOqsYK3t8HxkQ_WjwPoP2cwJiV1xDyWIw&s"
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="my-2 max-w-xl py-6">
                I am a 22 year old Dominican passionate about software
                development. I studied a technologist in software
                development career at the Technological Institute of the Americas
                (ITLA). I consider myself a dedicated person committed to
                continuous learning, always looking for new ways to improve my
                skills. I enjoy the gym and reading, which help me maintain a
                balance between personal and professional development.
                Translated with DeepL.com (free version)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
