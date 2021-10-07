import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import useDarkMode from './../darkmode/useDarkMode';

export default function SideBar({ toggle }) {
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <div className={`sidebar sm:fixed sm:z-30 lg:w-1/5 h-screen w-64 py-7 px-2 absolute inset-y-0 left-0 transform ${!toggle && '-translate-x-full'} md:fixed lg:translate-x-0 md:z-30 transition duration-300 bg-gray-100 dark:bg-black ease-in-out`}>
        <nav className="flex-grow md:block px-4 pb-4 md:pb-0 h-auto">
            <h1 className="text-center text-2xl font-main uppercase p-4 text-gray-500 tracking-wider shadow-md">Anime VT</h1>
            <ul className="flex flex-col py-4 menu-items">
                <li>
                    <Link 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}  
                        className="flex mb-2 flex-row items-center h-12 transition cursor-pointer ease-in duration-300 hover:text-blue-500 ">
                        <span className="inline-flex items-center justify-center h-10 w-10 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Home</span>
                        
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="anime-manga"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} 
                        className="flex flex-row rounded-xl mb-2 items-center h-12 transition cursor-pointer ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Top Anime - Manga</span>
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="po-anime"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} 
                        className="flex flex-row rounded-xl mb-2 items-center h-12 transition cursor-pointer ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Anime Popular</span>
                        
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="po-manga"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} 
                        className="flex flex-row rounded-xl mb-2 items-center h-12 transition cursor-pointer ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Manga Popular</span>
                        
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="voice-actor"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} 
                        className="flex flex-row rounded-xl mb-2 items-center h-12 transition cursor-pointer ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Voice Actor</span>
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="characters"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} 
                        className="flex flex-row rounded-xl mb-2 items-center h-12 cursor-pointer transition ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Character</span>
                    
                    </Link>
                </li>
                <li>
                    <NavLink
                        to='/search/'
                        className="flex flex-row rounded-xl mb-2 items-center h-12 transition cursor-pointer ease-in duration-300 text-gray-500 hover:text-blue-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="text-md font-main">Search</span>
                        
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className="absolute bottom-0 left-0 w-full flex justify-around px-4 pb-4">
            <button onClick={() => setTheme(colorTheme)} className="bg-gray-500 rounded-full shadow-lg text-white w-10 h-10 inline-flex items-center justify-center transition duration-300">
                {colorTheme === 'light'
                    ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )
                }
                
                
            </button>
            <p className="bg-gray-500 rounded-full shadow-lg text-white w-10 h-10 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </p>
            <p className="relative bg-gray-500 rounded-full shadow-lg text-white w-10 h-10 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"><i>8</i></span>
            </p>
            <p className="relative bg-gray-500 rounded-full shadow-lg text-white w-10 h-10 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"><i>5</i></span>
            </p>
        </div>
    </div>

    )
}
