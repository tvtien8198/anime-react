import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetListData } from '../../apis'

export default function MangaViewAll() {
    const [mangaList, setAnimeList] = useState([])
    const [count, setCount] = useState(8)
    const [loading, setLoading] = useState(false)
    const LoadMoreAnime = () => {
        setLoading(true)
        setTimeout(() =>{
            setCount(count + 4)
            setLoading(false)
        },4000)        
        
    }
    useEffect(() => {
        GetListData('manga')
            .then(res => setAnimeList(res))
    },[])
    return (
        <section className="py-12 flex flex-col justify-center">
            <Link to="/" className="flex hover:text-white text-lg items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-gray-800 dark:text-gray-500">Back to home page</p>
            </Link>    
            <div className="mb-8">
                <p className="font-main uppercase text-4xl tracking-wider text-gray-800 dark:text-gray-500 text-white text-center">Manga</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {
                mangaList.slice(0, count).map((manga, id) => 
                <div key={id} className="relative cursor-pointer flex items-center flex-col justify-center">
                    <Link to={`/${manga.mal_id}`} >
                        <img className="shadow-xl rounded-md lg:w-60 sm:w-full sm:h-full lg:h-xxl object-cover lazyload blur-up" src={manga.image_url} data-src={manga.image_url} alt={manga.title} />
                    </Link>   
                    <div className="transition duration-300 ease-in-out text-white w-full h-full">   
                        <ul className="my-2">
                            <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block mr-2">Active</li>
                            <li className="text-sm text-white px-2 rounded-full bg-gray-500 inline-block">{manga.type}</li>
                        </ul>
                        <Link to={`/${manga.mal_id}`} >     
                            <span className="text-lg font-main text-gray-800 dark:text-gray-500">{manga.title}</span>
                        </Link>
                    </div>
                    <div className="absolute flex items-center py-1 px-2 rounded-md bg-gray-500 text-white font-main text-xs top-2 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="ml-1">{manga.score}</p>
                    </div>
                    <p className="absolute py-1 px-2 flex text-xs font-main items-center rounded-md text-white bg-red-500 z-20 top-2 left-2">
                        <span>{manga.volumes || '?'}/{manga.volumes || '?'}</span>
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
        </section>
    )
}
