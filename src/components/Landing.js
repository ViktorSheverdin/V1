import React from 'react';
import { Fragment } from 'react';
import AllComponents from './AllComponents';
import HeaderMenu from './HeaderMenu';
import HomeBanner from './HomeBanner';
import Welcome from './Welcome';
import MyTabs from './MyTabs';
import Features from './Features';
import HomeGallery from './HomeGallery';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Landing = () => {
  return (
    <Fragment>
      <HeaderMenu />
      <HomeBanner />
      <Welcome />
      <MyTabs />
      {/* <Features /> */}
      <HomeGallery />
      {/* <Testimonials /> */}
      <Footer />
    </Fragment>
  );
};

export default Landing;
