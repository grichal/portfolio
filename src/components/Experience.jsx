import React from 'react'

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'>Experience</h1>
        <div >
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-neutral-400'>2002 - 2024</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>
                        Developer -{" "}
                        <span className='text-sm text-green-200'>microsoft</span>
                    </h6>
                    <p className='mb-4 text-neutral-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium ab eum placeat illo officiis tempore vel quidem dignissimos eos molestiae incidunt obcaecati quasi corrupti, commodi at voluptate non!</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300'>java</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300'>sql</span>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Experience