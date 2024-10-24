import React from 'react'
import  projects  from '../projectsConstans'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
           
           {projects.map((value,index)=>{
            return(
                <>
                 <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                <div className="w-full lg:w-1/4">
                    <img src={value.image} alt="" 
                    width={150}
                    className='mb-6 rounded-lg'/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{value.project}</h6>
                    <p className='mb-4'>{value.description}</p>
                    {value.technologies.map((value, index)=>{
                        return(
                            <>
                            <span key={index} className='bg-neutral-900 px-2 py-1 mr-2 text-cyan-200 text-sm'>{value}</span>
                            </>
                        )
                    })}
                </div>
            </div></>
            )
           })}

        </div>
    </div>
  )
}

export default Projects