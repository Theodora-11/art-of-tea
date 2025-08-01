import coverImage from '../assets/mix-tea2.jpg'
import imageTitle from '../assets/flower-title.png'
import  CarouselRightTea  from './CarouselRightTea.jsx'
import { useEffect } from 'react'
import { preferTeasCustoms } from '../utils/prefer-custom'
import { selectionRightTeas }  from '../utils/right-tea'

export default function Main() {

  useEffect(() => {
    const slider = document.querySelector('.wrapper-custom-prefer');
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => { isDown = false; slider.classList.remove('active') };
    const mouseUp = () => { isDown = false; slider.classList.remove('active') };
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX);
      slider.scrollLeft = scrollLeft - walk;
    }

    slider.addEventListener('mousedown', mouseDown);
    slider.addEventListener('mouseleave', mouseLeave);
    slider.addEventListener('mouseup', mouseUp);
    slider.addEventListener('mousemove', mouseMove);

    return () => {
      slider.removeEventListener('mousedown', mouseDown);
      slider.removeEventListener('mouseleave', mouseLeave);
      slider.removeEventListener('mouseup', mouseUp);
      slider.removeEventListener('mousemove', mouseMove);
    }

  }, [])


  return (

    <main>
      <section className="wrapper-cover-image">
        <h1 className="title">The Calm Of Nature in Every Morning Cup</h1>
        <img className="cover-image" src={coverImage}/>
      </section>

      <section className="custom-prefer-section">  
        <div className="wrapper-title">
          <img className="image-title" src={imageTitle} alt="title image"/>
          <h2 className='title-custom-prefer'>Preferred by customers</h2>
        </div> 

        <div className="wrapper-custom-prefer">
          {preferTeasCustoms.map((customPrefer, index )=> {
            const imgUrl = new URL(`../assets/customPrefer/${customPrefer.src}`, import.meta.url).href;

            return (
              <div key={index} className="container-tea-text-prefer">
                <div className="box-tea-img">
                  <img 
                    src={imgUrl} 
                    className="tea-prefer-img" 
                    alt={customPrefer.alt}/>
                </div>

                <div className="wrapper-text-prefer">
                  <h3 className="title-tea-prefer">{customPrefer.titleTea}</h3>
                  <p className="stars-rate"></p>
                  <p className="describe-custom">{customPrefer.text}</p>
                  <p className="name-custom-prefer">{customPrefer.nameCustom}</p>
                </div>
              </div>
            )
          })}

        </div>
      </section>

      <section className="section-perfect-tea">
        <div className="wrapper-title">
          <img className="image-title" src={imageTitle} alt="title image"/>
          <h2 className='title-custom-prefer'>Your Perfect Tea</h2>
        </div>

        <CarouselRightTea />

      </section>
    </main>
  )
}