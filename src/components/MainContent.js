import React from 'react'
import AnimeSearch from './AnimeSearch'

export default function MainContent(props) {
    const { HandleSearch, search, setSearch, searchAnime, loading } = props


    return (
        <>
        <div className="flex items-center justify-between mb-8">
            <h1 className="font-main uppercase text-4xl tracking-wider text-gray-800">Search</h1>
            <form className="bg-white p-2 flex w-1/3 rounded-md"
                        onSubmit={HandleSearch}
                    >
                    <span className="w-auto flex justify-end items-center text-gray-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input 
                        className="w-full rounded focus:outline-none" 
                        type="text" placeholder="Search for an anime..."
                        required
                        value={search}
                        onChange={e => setSearch(e.target.value)}

                    />
                    <button onClick={(e) => HandleSearch(e)} className="bg-red-500 hover:bg-red-400 rounded text-white p-2 pl-4 pr-4">
                            <p className="font-semibold text-xs">Search</p>
                    </button>
            </form>
        </div>
            {
                loading 
                ? <AnimeSearch searchAnime={searchAnime} />                 
                : <div className="loader flex items-center justify-center mt-12"><div></div><div></div><div></div></div>
            }
        </>
    )
}
