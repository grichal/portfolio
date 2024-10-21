import React from "react";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb=16 mb-3 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Gregorio Caba
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              FULL STACK DEVELOPER
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fuga,
              consequatur perspiciatis quo aspernatur magni iusto officia cum,
              totam dolores doloremque? Itaque reprehenderit quia repellendus
              quibusdam accusantium, explicabo aperiam aspernatur nostrum.
              Voluptatum omnis voluptatibus libero quas obcaecati sunt ea eos,
              animi inventore rem esse odio aspernatur incidunt, tempora nisi
              qui.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img className="rounded-xl" src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
