import { useEffect } from 'react'

export default function useSlider(slideImage, slideText, images) {
    let slideCounter = 0;

    useEffect(() => startSlider())

    const startSlider =() => {
        slideImage.current.style.backgroundImage = `linear-gradient(
            to bottom,
            rgb(34 34 34 / 0%),
            rgb(68 68 68 / 42%)
            ), url(${images[0].src})`;
            slideText.current.innerHTML = images[0].text;
    }

    const handleSlide = (slide) => {
        slideImage.current.style.backgroundImage = `linear-gradient(
            to bottom,
            rgb(34 34 34 / 0%),
            rgb(68 68 68 / 42%)
          ), url(${images[slide - 1].src})`;
          slideText.current.innerHTML = images[slide - 1].text;
         animateSlide(slideImage)
    }

    const animateSlide = () => {
        slideImage.current.classList.add('fadeIn');
        setTimeout(() => {
          slideImage.current.classList.remove('fadeIn');
        }, 700);
    }
    
    const goToPreviousSlide = () => {
        if (slideCounter === 0) {
            handleSlide(images.length)
            slideCounter = images.length;
          }
        
        handleSlide(slideCounter)         
        slideCounter--;
    }

    const goToNextSlide = () => {
      if (slideCounter === images.length - 1) {
        startSlider()
        slideCounter = -1;
        animateSlide(slideImage)
      }

      slideImage.current.style.backgroundImage = `linear-gradient(
          to bottom,
          rgb(34 34 34 / 0%),
          rgb(68 68 68 / 42%)
          ),url(${images[slideCounter + 1].src})`;
      slideText.current.innerHTML = images[slideCounter + 1].text;
      slideCounter++;
      animateSlide(slideImage)
    }
  return { goToPreviousSlide, goToNextSlide }
}
