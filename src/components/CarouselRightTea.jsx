import { selectionRightTeas } from '../utils/right-tea';
import { useEffect, useState, useRef } from 'react';

export default function CarouselRightTea() {

  let [transitioning, setTransitioning] = useState(false);
  const carouselWrapper = useRef(null);
  const slideWidthRef = useRef(null);
  const countSlideRef = useRef(null);
  const visibleTeasRef = useRef(null);
  const next = useRef(null);
  const back = useRef(null);
  let index = useRef(4);
  const transitioningRef = useRef(false);

  useEffect(() => {
    transitioningRef.current = transitioning;
  }, [transitioning]);


  useEffect(() => {
    const nextBtn = next.current;
    const wrapper = carouselWrapper.current;

    function moveSlide () {
      if(!transitioningRef.current && nextBtn) nextBtn.click(); 
    }
    let autoSlide = setInterval(moveSlide, 2000);

    const handleMouseEnter = () => clearInterval(autoSlide);
    const handleMouseLeave = () => {autoSlide = setInterval(moveSlide, 2000)};
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return() => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(autoSlide);
    }

  }, [])

  useEffect(() => {
    const wrapper = carouselWrapper.current;
    const teas = wrapper.querySelectorAll('.li-right-tea');
    const originalTeas = [...teas];
    const slideWidth = originalTeas[0].offsetWidth + 32;
    slideWidthRef.current = slideWidth;
    const countSlide = originalTeas.length;
    countSlideRef.current = countSlide;
    const visibleTeas = 4;
    visibleTeasRef.current = visibleTeas;

    for(let i = 0; i < visibleTeas; i++) {
      const firstClone = originalTeas[i].cloneNode(true);
      const lastClone = originalTeas[countSlide - 1 - i].cloneNode(true);
      firstClone.classList.add('clone');
      lastClone.classList.add('clone');
      wrapper.appendChild(firstClone);
      wrapper.insertBefore(lastClone, wrapper.firstChild);
    }

    const allTeas = [...wrapper.querySelectorAll('.li-right-tea')];
    wrapper.style.transform = `translateX(-${slideWidth * visibleTeas}px)`;

  }, [])


  function startTransition(i) {
    const wrapper = carouselWrapper.current;
    const slideWidth = slideWidthRef.current;

    setTransitioning(true);
    wrapper.style.transition = 'transform 0.3s ease';
    wrapper.style.transform = `translateX(-${slideWidth * i}px)`;
  }

  function showLastTea() {
    if(transitioning) return;
    index.current--;
    startTransition(index.current);
  }

  function showNextTea() {
    if(transitioning) return;
    index.current++;
    startTransition(index.current);
  }


  useEffect(() => {
    const wrapper = carouselWrapper.current;
    
    const handleTransitionEnd = () => {
      const slideWidth = slideWidthRef.current;
      const countSlide = countSlideRef.current;
      const visibleTeas = visibleTeasRef.current; 

      if(index.current >= countSlide + visibleTeas) {
        wrapper.style.transition = 'none';
        index.current = visibleTeas;
        wrapper.style.transform = `translateX(-${slideWidth * index.current}px)`;
        setTimeout(() => {setTransitioning(false)}, 0)

        return
      }

      if(index.current < visibleTeas) {
        wrapper.style.transition = 'none';
        index.current = countSlide + visibleTeas - 1;
        wrapper.style.transform = `translateX(-${slideWidth * index.current}px)`;
        setTimeout(() => {setTransitioning(false)}, 0)

        return
      }

      setTransitioning(false);
    }

    wrapper.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      wrapper.removeEventListener('transitionend', handleTransitionEnd);
    }

  }, []) 


  return(
    <div className="container-carousel">
      <ul className="carousel-perfect-teas" ref={carouselWrapper}>
        {selectionRightTeas.map((objTea, index) => {
          const imgUrl = new URL(`../assets/yourRightTeas/${objTea.src}`, import.meta.url).href;

          return(
            <li key={index} className="li-right-tea">
              <a className="link-perfect-tea" href={objTea.href}>
                <img 
                  className="perfect-tea-img" 
                  src={imgUrl} 
                  alt={objTea.alt}
                />
              </a>             
              <h3 className="title-tea-prefer">{objTea.title}</h3>
            </li>
          )}) 
        }

      </ul>

      <div className="container__buttons">
        <button 
          className="material-symbols-outlined buttons__back button-carousel" 
          ref={back}
          onClick={showLastTea}
        >arrow_back_ios_new</button>

        <button 
          className="material-symbols-outlined buttons__next button-carousel" 
          ref={next}
          onClick={showNextTea}
        >arrow_forward_ios</button>

      </div>
    </div>
  )
}