import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetListData } from '../../apis'
import { compactNumber } from '../../format/Number'

export default function PeopleViewAll() {
    const [peopleList, setPeopleList] = useState([])
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
        GetListData('people')
            .then(res => setPeopleList(res))
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
                <p className="font-main uppercase text-4xl text-gray-800 dark:text-gray-500 text-center">Voice Actor</p>
            </div>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                peopleList.slice(0, count).map((people, id) => 
                    <div key={id} className="flex items-center flex-col p-4 bg-gray-100 font-main rounded-lg shadow-lg">
                        <div className="w-full overflow-hidden flex items-center justify-center mb-2">
                            <img className="object-center w-28 h-28 object-cover rounded-full shadow-md lazyload blur-up" src={people.image_url} data-src={people.image_url} alt={people.title} />
                        </div>
                        <h1 className="mb-2 text-gray-800 sm:text-sm font-bold">{people.title}</h1>
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

            
            {
                !loading 
                ? <div className="flex items-center justify-center mt-12"><button className="text-white bg-gray-500 py-2 px-8 rounded-md" onClick={LoadMoreAnime}>Load more</button> </div> 
                : <div className="loader flex items-center justify-center mt-12"><div></div><div></div><div></div></div>
            }
                    
        </section>
    )
}
