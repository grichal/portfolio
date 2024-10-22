import React from 'react'
import {RiFirebaseFill, RiNodejsFill, RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {DiDotnet, DiMsqlServer,DiMysql, DiPython} from 'react-icons/di'

function Technologies() {
  return (
    <div className="border-b border-neutral-500 pb-24">
        <div className="my-20 text-center text-4xl">Technologies</div>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl
             text-cyan-400
             '/>
             <p className='text-center'>react js</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsFill className='text-7xl
             text-green-500
             '/>
             <p className='text-center'>node js</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMsqlServer className='text-7xl
             text-red-800
             '/>
             <p className='text-center'>SQL</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl
             text-green-600
             '/>
             <p className='text-center'>mongoDB</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className='text-7xl
             text-cyan-400
             '/>
             <p className='text-center'>mySql</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDotnet className='text-7xl
             text-blue-200
             '/>
             <p className='text-center'>ASP.net API</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPython className='text-7xl
             text-yellow-300
             '/>
             <p className='text-center'>IA (soon..)</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFirebaseFill className='text-7xl
             text-yellow-500
             '/>
             <p className='text-center'>firebase</p>
            </div>
        </div> 
    </div>
  )
}

export default Technologies