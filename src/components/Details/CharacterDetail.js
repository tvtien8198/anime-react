import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GetDetailById } from '../../apis';
import { compactNumber } from '../../format/Number';

export default function CharacterDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        GetDetailById('character', id)
            .then(res => {
                setTimeout(() => {
                    return setDetail(res)
                },1000)
            })
    }, [id]);
    const {
        name,
        mal_id,
        member_favorites, 
        image_url, 
        name_kanji, 
        nicknames, 
        voice_actors,
        about,
        url
    } = detail
    return (
        <section key={mal_id} className="pb-12">
            <Link to="/" className="flex hover:text-white text-lg items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-gray-800 dark:text-gray-500">Back to home page</p>
            </Link>    
            <div className="w-full sm:h-ful md:h-full font-main">
                <div className="transform md:pt-10 sm:pt-4 md:px-20 lg:px-20 sm:px-4 h-ful w-full flex sm:flex-col md:flex-col lg:flex-row justify-center overflow-auto">
                    <div className="lg:w-1/3 md:w-full sm:w-full flex lg:justify-center md:justify-center sm:justify-center items-center">
                        <div className="relative">
                            <div className="md:w-56 lg:w-full sm:w-full shadow-xl">
                                {image_url ? 
                                    (<img src={image_url} data-src={image_url} alt={name} className="lazyload blur-up" />)
                                    : (<Skeleton count={12} />)
                                }
                                <div className="flex bg-white justify-center flex-col px-4 py-2">
                                    <div className="flex justify-around">
                                        <div className="flex flex-col items-center">
                                            <p className="text-sm font-bold text-blue-500">Favorites</p>
                                            <div className="w-12 h-px bg-black mb-1"></div>
                                            <p className="text-xl text-gray-500">{compactNumber(member_favorites) || `...`}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>  
                    </div>
                    <div className="lg:w-2/3 md:w-full sm:w-full py-4 text-gray-500">
                        <h1 className="text-xl tracking-wide uppercase mb-2 text-gray-800 dark:text-gray-500">{name || <Skeleton count={1} />}</h1>
                        <p className="mb-4 text-sm">{name_kanji || <Skeleton count={1} />}</p>
                        <p className="text-sm mb-2 tracking-wider" >
                            <span className="font-bold text-gray-800 dark:text-gray-500 mr-1">Nicknames:</span>
                            {nicknames && nicknames.map((prod, id) => <span key={id}>{prod}, </span>)}
                        </p>
                        <h2 className="text-sm font-bold tracking-wider text-gray-800 dark:text-gray-500 pb-2">Voice actors: </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 mb-4">
                            {
                            voice_actors && voice_actors.map((genre, id) => 
                            <div key={id} className="p-2 text-xs flex items-center transition duration-300 ease-in-out cursor-pointer mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <p className="">{genre.name}</p>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full lg:px-24 sm:px-4 sm:pt-4 pt-10">
                    <div className="text-sm leading-5 text-gray-500 tracking-wider">
                        <span className="font-bold text-gray-800 dark:text-gray-500">Synopsis </span>
                        <div className="w-16 h-px text-gray-500 mb-2"></div>
                        {about || <Skeleton count={8} />}
                    </div>   
                    <a className="text-sm font-bold" href={url} target="_blank" rel="noreferrer" >See more... </a>            
                </div>
            </div>
        </section>
    )
}
