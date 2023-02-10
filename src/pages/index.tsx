import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import PriceList from '../components/PriceList';
import Product from '../components/Product';

const App = () => {
  const [state, setState] = React.useState(false);
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header state={state} setState={setState} />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      {!state ? (
        <>
          <Canvas />
          <LazyShow>
            <>
              <Product />
              <Canvas />
            </>
          </LazyShow>
          <Analytics />
        </>
      ) : (
        <PriceList />
      )}
    </div>
  );
};

export default App;
