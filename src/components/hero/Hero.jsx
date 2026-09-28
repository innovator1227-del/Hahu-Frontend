import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Service from './components/pages/hahu-service/Service';
import HeroPart from './components/pages/HeroPart';
import HeroView from './components/pages/HeroView';
import Reasining from './components/pages/Reasining';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="px-8 py-9 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Slider {...settings}>
            <div className="h-[500px] px-1 sm:h-[480px] lg:h-[430px]">
              <HeroPart />
            </div>

            <div className="h-[500px] px-1 sm:h-[480px] lg:h-[430px]">
              <HeroView />
            </div>
          </Slider>
        </div>
      </section>

      <Reasining />

      <Service />
    </>
  );
};

export default Hero;
