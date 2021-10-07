import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnimeSearch({ searchAnime }) {

    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const LoadMoreAnime = () => {
        setLoading(true)
        setTimeout(() =>{
            setCount(count + 4)
            setLoading(false)
        },2000)           
    }

    return (
		<>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
            {
                searchAnime.slice(0, count).map((anime, id) =>

                <div key={id} className="relative cursor-pointer flex items-center flex-col justify-center">
                    <Link to={`/anime/${anime.mal_id}`} >
                        <img className="shadow-lg rounded-md md:w-60 w-full h-xxl object-cover lazyload blur-up" src={anime.image_url} data-src={anime.image_url} alt={anime.title} />
                    </Link>   
                    <div className="transition duration-300 ease-in-out text-gray-700 w-full h-full">   
                        <ul className="my-2">
                            <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block mr-2">Active</li>
                            <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block">{anime.type}</li>
                        </ul>
                        <Link to={`/anime/${anime.mal_id}`} >     
                            <span className="text-lg font-main text-gray-800">{anime.title}</span>
                        </Link>
                    </div>
                    <div className="absolute flex items-center py-1 px-2 rounded-md bg-gray-500 text-white font-main text-xs top-2 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="ml-1">{anime.score}</p>
                    </div>
                    <p className="absolute py-1 px-2 flex text-xs font-main items-center rounded-md text-white bg-red-500 z-20 top-2 left-2">
                        <span>{anime.episodes || '?'}/{anime.episodes || '?'}</span>
                    </p>
                </div>  
                )
            }
            
            </div>    
            {
                !loading 
                ? <div className="flex items-center justify-center mt-12"><button className="text-white bg-gray-500 py-2 px-8 rounded-md" onClick={LoadMoreAnime}>Load more</button> </div> 
                : <div className="loader flex items-center justify-center mt-12"><div></div><div></div><div></div></div>
            }
		</> 

    )
}
