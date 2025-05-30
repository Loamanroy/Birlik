import Banner from '../components/sections/Banner';
import Categories from '../components/sections/Categories';
import Market from '../components/sections/Market';
import BirlikTaxi from '../components/sections/BirlikTaxi';
import Delivery from '../components/sections/Delivery';
import Recommendations from '../components/sections/Recommendations';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Market />
        </div>
        <div>
          <BirlikTaxi />
        </div>
      </div>
      <Delivery />
      <Recommendations />
    </>
  );
};

export default HomePage;
