import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Composition from "../components/Composition/Composition";
import Info from "../components/Info/Info";
import Reviews from "../components/Reviews/Reviews";
import Shop from "../components/Shop/Shop";

const Main = () => {
  return (
    <div>
      <Banner />
      <Shop />
      <Reviews />
      <About />
      <Composition />
      <Info />
    </div>
  );
};

export default Main;
