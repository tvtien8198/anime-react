import React from 'react'
import { Images } from './Slide/Images';
import Slider from './Slide/Slider';

export default function Slide() {

    return (
        <section id="home" className="lg:h-screen lg:pb-12 sm:py-8 px-5">
            <Slider images={Images} />
        </section>
    )
}
