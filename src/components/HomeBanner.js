import React from 'react';
import Personal from '../img/personal.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section class='home_banner_area'>
      <div class='container box_1620'>
        <div class='banner_inner d-flex align-items-center'>
          <div class='banner_content'>
            <div class='media'>
              <div class='d-flex'>
                <img
                  // src={require('../img/personal.jpg')}
                  src={Personal}
                  class='rounded'
                  // width='100%'
                  alt=''
                />
              </div>
              <div class='media-body'>
                <div class='personal_text'>
                  <h6>Hello Everybody, i am</h6>
                  <h3>Viktor Sheverdin</h3>
                  <h4>Web Developer / SysAdmin</h4>
                  <p>
                    Main area of expertise is automation and full stack
                    development. Currently working with Houle IT team deploying
                    various custom scripts and applications to automate tasks
                    and enhance business processes. Focus is on maintaining
                    custom system that connects on Microsoft API for Skype,
                    Outlook, and AD. <br />
                    As well as that, I work with SCCM and Carbon Black security
                    systems and end-user support. I am an avid full-stack
                    developer at heart, with a passion for learning and
                    implementing the latest JavaScript frameworks to improve
                    usability of web builds.
                  </p>
                  <ul class='list basic_info'>
                    {/* <!-- <li><a href="#"><i class="lnr lnr-calendar-full"></i> 31st December, 1992</a></li> --> */}
                    <li>
                      <span class='lnr lnr-phone-handset'></span> (778) 919-8507
                    </li>
                    <li>
                      <i class='lnr lnr-envelope'></i>{' '}
                      viktor.sheverdin@gmail.com
                    </li>
                    <li>
                      <i class='lnr lnr-home'></i> Burnaby, BC
                    </li>
                  </ul>
                  <ul class='list personal_social'>
                    <li>
                      <Link
                        to={{
                          pathname:
                            'https://www.linkedin.com/in/viktor-sheverdin-4062b674/',
                        }}
                        target='_blank'
                      >
                        <i class='fa fa-linkedin'></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{ pathname: 'https://github.com/ViktorSheverdin' }}
                        target='_blank'
                      >
                        <i class='fa fa-github' aria-hidden='true'></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname:
                            'https://www.instagram.com/viktor.sheverdin/',
                        }}
                        target='_blank'
                      >
                        <i class='fa fa-instagram' aria-hidden='true'></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname:
                            'https://www.facebook.com/viktor.sheverdin/',
                        }}
                        target='_blank'
                      >
                        <i class='fa fa-facebook'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
