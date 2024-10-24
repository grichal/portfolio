import React, { useEffect } from "react";
import experience from "../experienceConstants";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {experience.map((value, index) => {
          return (
            <>
              <div
                className="mb-8 flex flex-wrap lg:justify-center"
                key={index}
              >
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">{value.date}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">
                    {value.position} -{" "}
                    <span className="text-sm text-green-200">
                      {value.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-neutral-500">{value.description}</p>
                  {value.technologies.map((value, index) => {
                    return (
                      <>
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300">
                          {value}
                        </span>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
