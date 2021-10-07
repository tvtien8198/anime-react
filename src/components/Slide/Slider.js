import React, { useRef } from 'react'
import useSlider from './useSlider'

export default function Slider({ images }) {
    const slideImage = useRef(null)
    const slideText = useRef(null)
    const { goToPreviousSlide, goToNextSlide } = useSlider(
        slideImage,
        slideText,
        images
    )
    return ( 
        <div className="slide cursor-pointer bg-center md:p-20 sm:px-2 sm:py-4 bg-no-repeat bg-cover relative w-full shadow-2xl rounded-lg" ref={slideImage}>
            <button onClick={goToPreviousSlide} className="w-16 h-16 md:border-solid md:border-8 md:border-gray-100 dark:border-black absolute md:top-1/2 sm:bottom-2 sm:right-12 md:-translate-y-1/2 md:-left-8 transform rotate-45 transition ease-in z-10">
                <p className="w-12 h-12 bg-gray-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg> 
                </p>
            </button>
            <div className="title-slide relative h-96">
                <p ref={slideText} className="absolute left-0 bottom-1 text-white lg:text-4xl sm:text-2xl font-bold"></p>
                <div className="absolute left-0 bottom-0 w-4 sm:w-36 h-1 bg-white dot"></div>                             
            </div>
           <button onClick={goToNextSlide} className="w-16 h-16 md:border-solid md:border-8 md:border-gray-100 dark:border-black absolute md:top-1/2 sm:bottom-12 sm:right-2 md:-translate-y-1/2  md:-right-8 transform rotate-45 transition ease-in z-10">
                <p className="w-12 h-12 bg-gray-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </p>
                
            </button>
        </div>
        
    )
}
