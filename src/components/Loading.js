import React from 'react'
import loadingGif from '../images/luf.gif'

export default function Loading() {
    return (
        <div className={`fixed top-0 left-0 overflow-auto bg-white transition ease-in-out duration-500 h-screen w-full z-30 `}>
            <div className="relative">
                <div>
                <div className="flex items-center justify-center flex-col py-12">
                    <img src={loadingGif} alt="loading" />
                    <h1 className="text-xl "> Loading...</h1>
                </div>
                </div>
            </div>
        </div>
    )
}
