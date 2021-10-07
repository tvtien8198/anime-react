import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetListData } from '../../apis'
import { compactNumber } from '../../format/Number'

export default function CharacterViewAll() {
    const [characterList, setCharacterList] = useState([])
    const [count, setCount] = useState(5)
    const [loading, setLoading] = useState(false)
    const LoadMoreAnime = () => {
        setLoading(true)
        setTimeout(() =>{
            setCount(count + 5)
            setLoading(false)
        },4000)        
        
    }
    useEffect(() => {
        GetListData('character')
            .then(res => setCharacterList(res))
    },[])
    return (
        <section className="py-12 flex flex-col justify-center">   
            <Link to="/" className="flex text-lg items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-gray-800 dark:text-gray-500">Back to home page</p>
            </Link>    
            <div className="mb-8">
                <p className="font-main uppercase text-4xl text-gray-800 dark:text-gray-500 tracking-wider text-center">Character</p>
            </div>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                characterList.slice(0, count).map((character, id) => 
                    <div key={id} className="py-8 flex flex-col justify-center">
                        <Link to={`/character/${character.mal_id}`} className="flex space-x-4 sm:w-full cursor-pointer">
                            <div className="bg-gray-100 font-main h-40 sm:w-full w-28 md:w-96 md:rounded-lg sm:rounded-md shadow-xl relative flex flex-col items-center md:items-start py-5 md:p-5 transition-all duration-150">
                                <span className="absolute -top-10 left-2 rounded-full z-10 w-6 h-6 bg-red-500  text-white text-center">{character.rank}</span>
                                <img className="rounded-full w-24 h-24 shadow-md absolute -top-10 left-1 transform md:scale-110 duration-700 object-cover object-center lazyload blur-up" src={character.image_url} data-src={character.image_url} alt={character.title} />
                                <span className="absolute top-3 right-3 text-red-600">❤ {compactNumber(character.favorites)}</span>
                                <span className="md:mt-12 sm:mt-12 sm:px-2">
                                    <p className="font-bold text-gray-800 m-auto md:m-0">{character.title}</p>
                                    <p className="text-sm text-gray-500">({character.name_kanji})</p>
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            }
            </div>          
            {
                !loading 
                ? <div className="flex items-center justify-center mt-12"><button className="text-white bg-gray-500 py-2 px-8 rounded-md" onClick={LoadMoreAnime}>Load more</button> </div> 
                : <div className="loader flex items-center justify-center mt-12"><div></div><div></div><div></div></div>
            }
                    
        </section>
    )
}
