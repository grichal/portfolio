import React from 'react'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img src="https://www.cyberclick.es/hs-fs/hubfs/04.%20BLOG/Dashboard%20de%20DataBox.png?width=796&height=579&name=Dashboard%20de%20DataBox.png" alt="" 
                    width={150}
                    className='mb-6 rounded-lg'/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>dashboard</h6>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur, sapiente dolorum quibusdam earum accusamus nisi culpa voluptate nobis quasi atque quod cum ea, qui, consequatur obcaecati facere voluptatum dolorem.</p>
                    <span className='bg-neutral-900 px-2 py-1 mr-2 text-cyan-200 text-sm'>json</span>
                
                    <span className='bg-neutral-900 px-2 py-1 text-cyan-200 text-sm'>firebase</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects