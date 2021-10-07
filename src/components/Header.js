import React from 'react'
import Avatar from '../images/nami.png'

export default function Header() {

    return (
        <header className="flex sm:hidden md:justify-between sm:justify-center mb-6">
            <div className="flex">
                <button className="flex items-center justify-center h-10 w-10 bg-gray-500 text-white transition duration-300 ease-in-out hover:text-white rounded-full shadow-md mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="flex items-center justify-center h-10 w-10 bg-gray-500 text-white transition duration-300 ease-in-out hover:text-white rounded-full shadow-md mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="flex">
                <button className="flex relative items-center justify-center h-10 w-10 bg-gray-500 text-white transition duration-300 ease-in-out hover:text-white rounded-full shadow-md mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"><i>9</i></span>
                </button>
                <button className="relative flex items-center justify-center h-10 w-10 bg-gray-500 text-white transition duration-300 ease-in-out hover:text-white rounded-full shadow-md mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"><i>5</i></span>
                </button>
                <button className="relative flex items-center justify-center transition duration-300 ease-in-out">
                    <img className="rounded-full h-10 w-10 shadow-md" src={Avatar} alt="avatar" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 text-white text-xs rounded-full"></span>
                </button>
            </div>
        </header>
    )
}
