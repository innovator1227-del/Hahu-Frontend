import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Categories from "./components/pages/catogories/Categories";
import Service from "./components/pages/hahu-service/Service";
import HeroPart from "./components/pages/HeroPart";
import HeroView from "./components/pages/HeroView";
import Reasining from "./components/pages/Reasining";
import About from "./components/pages/about/AboutUS";
import AboutHahu from "./components/pages/AboutHahu";
import Story from "./components/pages/Story";
import Vission from "./components/pages/about/Vission";
import ExploreGrid from "./components/pages/ExploreGrid";
import HahuWork from "./components/pages/how_towork/HahuWork";
import { teamMembers } from "./components/pages/about/AboutData";
import TopReated from "./components/pages/top_reated/TopReated";

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

      <AboutHahu />

      <Categories />

      <TopReated />

      <Service />

      <Reasining />

      <Story />
      <Vission />
      <HahuWork />
      <About teamMembers={teamMembers} />
      <ExploreGrid />
    </>
  );
};

export default Hero;
