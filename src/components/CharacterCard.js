import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { compactNumber } from '../format/Number'

export default function CharacterCard({ topCharacter }) {
    return (
        <section id="characters" className="lg:h-screen py-12 flex flex-col justify-center">
            <h1 className="mb-8 flex justify-between text-gray-800 dark:text-gray-500">
                <div className="flex items-center">
                    <div className="w-1 mr-2 bg-red-500 h-8"></div>
                    <p className="font-main uppercase md:text-2xl sm:text-base tracking-wider">Top 10 Characters</p>
                </div>
                <div className="flex items-center pr-6">
                    <NavLink className="mr-2 text-base italic" to="/view-character-all/"> View all </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                topCharacter.map((character, id) => 
                    <div key={id} className="py-8 flex flex-col justify-center">
                        <Link to={`/character/${character.mal_id}`} className="flex space-x-4 sm:w-full cursor-pointer">
                            <div className="bg-gray-100 font-main h-40 sm:w-full w-28 md:w-96 md:rounded-lg sm:rounded-md shadow-xl relative flex flex-col items-center md:items-start py-5 md:p-5 transition-all duration-150">
                                <span className="absolute -top-9 left-2 rounded-full z-10 w-6 h-6 bg-red-500 text-white text-center">{character.rank}</span>
                                <img className="rounded-full w-24 h-24 absolute shadow-lg -top-10 left-2 transform md:scale-110 duration-700 object-cover object-center lazyload blur-up" src={character.image_url} data-src={character.image_url} alt={character.title} />
                                <span className="absolute top-3 right-3 text-red-600">❤ {compactNumber(character.favorites)}</span>
                                <span className="md:mt-12 sm:mt-12 sm:px-2">
                                    <p className="text-gray-800 dark:text-gray-500 m-auto md:m-0">{character.title}</p>
                                    <p className="text-sm text-gray-500">({character.name_kanji})</p>
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            }
            </div>
        </section>
        
        
    )
}
