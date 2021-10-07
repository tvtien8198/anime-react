import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <footer className="py-12 px-8 bg-gray-500 relative">
            <Link 
                spy={true}
                smooth={true}
                offset={0}
                duration={700} 
                to="home" className="absolute cursor-pointer -top-7 border-solid border-8 border-gray-100 dark:border-black transform rotate-45 left-1/2 -translate-x-2/4">
                <p className="w-10 h-10 bg-gray-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </p>  
            </Link>
            <div className="flex lg:flex-row md:flex-col sm:flex-col items-center justify-between">
                <Link to="/" className="lg:w-1/4 sm:w-full md:w-full px-8 py-4 text-2xl text-white text-center">Anime VT</Link>
                <ul className="lg:w-2/4 sm:w-full md:w-full flex justify-around items-center text-white text-md sm:mb-4 lg:mb-0 md:mb-4">
                    <li className="pr-2"><Link to="/view-anime-all/">Anime</Link></li>
                    <li className="pr-2"><Link to="/view-manga-all/">Manga</Link></li>
                    <li className="pr-2"><Link to="/view-character-all/">Character</Link></li>
                    <li className=""><Link to="/view-people-all/">Voice Actor</Link></li>
                </ul>
                <p className="lg:w-1/4 md:w-full sm:w-full text-white text-sm sm:text-center md:text-center">
                Copyright ©2021 All rights reserved | This template is made with ❤ by TV
                </p>
            </div>
        </footer>
    )
}
