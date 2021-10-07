import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link, NavLink } from 'react-router-dom';
import { compactNumber } from './../../format/Number';

export default function TopAnime({ topAnime }) {

    return (
        <div className="md:w-2/4 sm:w-full md:mr-2 sm:mb-4">
            <h1 className="mb-4 flex justify-between text-gray-800 dark:text-gray-500">
                <div className="flex items-center">
                    <div className="w-1 mr-2 bg-red-500 h-8"></div>
                    <p className="font-main uppercase lg:text-2xl sm:text-base tracking-wider">Top 3 Anime</p>
                </div>
                <div className="flex items-center pr-6">
                    <NavLink to="/view-anime-all/" className="mr-2 text-base italic "> View all </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </h1>
            {
                topAnime.map((anime, id) => 
                    <article key={id} className="cursor-pointer mb-2 p-2.5">
                        <Link to={`/anime/${anime.mal_id}`} className="flex space-x-2">
                            <img src={anime.image_url} data-src={anime.image_url} alt={anime.title} className="lazyload blur-up flex-none w-24 h-30 rounded-md object-cover mr-2" />
                            <div className="min-w-0 relative flex-auto items-center justify-center sm:pr-16 lg:pr-0 xl:pr-16">
                                <ul className="mt-2">
                                    <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block mr-2">Active</li>
                                    <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block">{anime.type}</li>
                                </ul>
                                <h2 className="md:text-xl sm:text-sm text-gray-800 dark:text-gray-500 font-main mt-1 md:truncate">
                                    {anime.title || <Skeleton count={1} />}
                                </h2>
                                <dl className="flex flex-wrap text-sm font-main whitespace-pre">
                                    <div className="flex-none w-full mt-0.5 font-normal">
                                        <span className="flex text-gray-500">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                                </svg>
                                            </p>
                                            <p className="ml-2">{anime.episodes || <Skeleton count={1} />} Episodes</p>
                                        </span>
                                        <span className="flex text-gray-500">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                            </p>
                                            <p className="ml-2">{anime.score || <Skeleton count={1} />} Score</p>
                                        </span>
                                        <span className="flex text-gray-500">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </p>
                                            <p className="ml-2">{compactNumber(anime.members) || `...`} Members</p>
                                        </span>
                                    </div>
                                    <div
                                        className="absolute bottom-0 right-0 px-2 py-0.5 sm:flex lg:flex items-center space-x-1">
                                        <dd className="text-gray-500 sm:hidden md:hidden lg:block">Ranked</dd>
                                        <dd className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-md">
                                            <p className="text-2xl">
                                                {anime.rank || `?`}
                                            </p>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </Link>
                        
                    </article>
                )
            }
        </div>
        
    )
}
