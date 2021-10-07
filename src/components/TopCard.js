import React from 'react'
import TopAnime from './TopAll/TopAnime'
import TopManga from './TopAll/TopManga'

export default function TopCard({ topAnime, topManga }) {
    return (
        <section id="anime-manga" className="lg:h-screen py-12">
            <div className="flex justify-between sm:flex-col">
                <TopAnime topAnime={topAnime} /> 
                <TopManga topManga={topManga} />
            </div>
        </section>
    )
}
