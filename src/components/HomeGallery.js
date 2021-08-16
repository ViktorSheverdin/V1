import React from 'react';
import DevConnector from '../img/gallery/devcon.png';
import Starbucks from '../img/gallery/starbucks.png';
import Weather from '../img/gallery/weather.png';
import { Link } from 'react-router-dom';
import { SRLWrapper } from 'simple-react-lightbox';

const HomeGallery = () => {
  const images = [
    {
      src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash18.jpg',
      thumbnail:
        'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash18.jpg',
      caption: 'Lorem ipsum dolor sit amet',
      width: 1920,
      height: 'auto',
    },
  ];
  return (
    <section class='home_gallery_area p_120'>
      <div class='container'>
        <div class='main_title' id='projects'>
          <h2>My latest featured Projects</h2>
          {/* <p>Who are in extremely love with eco friendly system.</p> */}
        </div>
        <div class='isotope_fillter'>
          <ul class='gallery_filter list'>
            <li class='active' data-filter='*'></li>
          </ul>
        </div>
      </div>
      <div class='container'>
        <div class='gallery_f_inner row imageGallery1'>
          <div class='col-lg-4 col-md-4 col-sm-6 brand manipul design print'>
            <div class='h_gallery_item'>
              <div class='g_img_item'>
                <img class='img-fluid' src={DevConnector} alt='DevConnector' />
              </div>

              <div class='g_item_text'>
                <h4>Developer Connector</h4>
                <p>Social network that helps employers to find developers</p>
                <Link
                  to={{
                    pathname: 'https://github.com/ViktorSheverdin/devNetwork',
                  }}
                  target='_blank'
                >
                  Github repo
                </Link>
                <p></p>
                <Link
                  to={{
                    pathname: 'https://protected-river-13776.herokuapp.com/',
                  }}
                  target='_blank'
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-4 col-sm-6 brand manipul creative'>
            <div class='h_gallery_item'>
              <div class='g_img_item'>
                <img class='img-fluid' src={Starbucks} alt='' />
              </div>
              <div class='g_item_text'>
                <h4>Starbucks App</h4>
                <p>Interpretation of Starbucks website</p>
                <Link
                  to={{
                    pathname: 'https://github.com/ViktorSheverdin/StarbucksApp',
                  }}
                  target='_blank'
                >
                  Github repo
                </Link>
                <p></p>
                <Link
                  to={{
                    pathname: 'https://starbuckscloneapp.herokuapp.com/',
                  }}
                  target='_blank'
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-4 col-sm-6 manipul creative design print'>
            <div class='h_gallery_item'>
              <div class='g_img_item'>
                <img class='img-fluid' src={Weather} alt='' />
              </div>
              <div class='g_item_text'>
                <h4>Weather forecast</h4>
                <p>Classical weather forecast project</p>
                <Link
                  to={{
                    pathname:
                      'https://github.com/ViktorSheverdin/weather_application',
                  }}
                  target='_blank'
                >
                  Github repo
                </Link>
                <p></p>
                <Link
                  to={{
                    pathname: 'https://yetanotherweatherapp.herokuapp.com/',
                  }}
                  target='_blank'
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
          {/* <div class='col-lg-4 col-md-4 col-sm-6 brand creative print'>
              <div class='h_gallery_item'>
                <div class='g_img_item'>
                  <img
                    class='img-fluid'
                    src='img/gallery/project-4.jpg'
                    alt=''
                  />
                </div>
                <div class='g_item_text'>
                  <h4>Embosed Logo Design</h4>
                  <p>Client Project</p>
                </div>
              </div>
            </div> */}
        </div>

        <div class='more_btn'>
          {/* <a class='main_btn' href='#'>
              Load More Items
            </a> */}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
