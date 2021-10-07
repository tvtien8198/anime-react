import React from 'react'
import { NavLink } from 'react-router-dom'
import { compactNumber } from '../format/Number'

export default function PeopleCard({ topPeople }) {
    return (
        <section id="voice-actor" className="lg:h-screen py-12">
            <h1 className="mb-8 flex justify-between text-gray-800 dark:text-gray-500">
                <div className="flex items-center">
                    <div className="w-1 mr-2 bg-red-500 h-8"></div>
                    <p className="font-main uppercase md:text-2xl sm:text-base tracking-wider">Top 10 Voice Actor</p>
                </div>
                <div className="flex items-center pr-6">
                    <NavLink className="mr-2 text-base italic" to="/view-people-all/"> View All </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                topPeople.map((people, id) => 
                    <div key={id} className="flex items-center flex-col p-4 bg-gray-100 font-main rounded-lg shadow-xl">
                        <div className="w-full overflow-hidden flex items-center justify-center mb-2">
                            <img className="object-center w-28 h-28 object-cover rounded-full shadow-lg lazyload blur-up" src={people.image_url} data-src={people.image_url} alt={people.title} />
                        </div>
                        <h1 className="mb-2 text-gray-800 dark:text-gray-500 sm:text-sm tracking-wider">{people.title}</h1>
                        <p className="mb-2 text-gray-500 sm:text-sm">({people.name_kanji})</p>
                        <span className="mb-2 flex items-center rounded-md shadow-md h-8 px-2 justify-center bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <p className="text-red-600">
                                {compactNumber(people.favorites)}
                            </p>
                            
                        </span>
                    </div>
                )
            }
            </div>
        </section>
        
    )
}
