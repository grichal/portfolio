import React from 'react'
import {RiNodejsFill, RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {DiDotnet, DiMsqlServer,DiMysql} from 'react-icons/di'

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
             text-cyan-400
             '/>
             <p className='text-center'>node js</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMsqlServer className='text-7xl
             text-cyan-400
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
             text-cyan-400
             '/>
             <p className='text-center'>ASP.net API</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className='text-7xl
             text-cyan-400
             '/>
             <p className='text-center'>mySql</p>
            </div>
        </div>
    </div>
  )
}

export default Technologies