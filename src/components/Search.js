import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GetDataBySearch } from '../apis';
import MainContent from './MainContent';

export default function Search() {
    const [search, setSearch] = useState('')
    const [searchAnime, setSearchAnime] = useState([])
    const [loading, setLoading] = useState(false)

    const HandleSearch = e => {
        e.preventDefault()
        setLoading(false)
        setTimeout(() =>{
            GetDataBySearch(search)
                .then(res => setSearchAnime(res.results))
            setLoading(true)
        },2000) 
        
    }

    return (
        <section className="py-12 flex flex-col justify-center">
            <Link to="/" className="flex hover:text-white text-lg items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-gray-800">Back to home page</p>
            </Link>    
            <MainContent 
                HandleSearch={HandleSearch}
                search={search}
                setSearch={setSearch}
                searchAnime={searchAnime}
                loading={loading}
            />
        </section>
    )
}
