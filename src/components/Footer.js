import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class='footer_area p_120'>
      <div class='container'>
        <div class='row footer_inner'>
          <div class='col-lg-5 col-sm-6'>
            <aside class='f_widget ab_widget'>
              <div class='f_title'>
                <h3>About Me</h3>
              </div>
              <p>
                MERN stack (MongoDB, Express, React.js, Node,js), Full-Stack
                development focusing my interest mainly on Front-End development
                and intend to use this knowledge to serve as a valuable asset
                for Front-End developer.
              </p>
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i class='fa fa-heart-o' aria-hidden='true'></i> by
                {' Viktor Sheverdin'}
              </p>
            </aside>
          </div>
          <div class='col-lg-5 col-sm-6'>
            <aside class='f_widget news_widget'>
              <div id='mc_embed_signup'></div>
            </aside>
          </div>
          <div class='col-lg-2'>
            <aside class='f_widget social_widget'>
              <div class='f_title'>
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <ul class='list'>
                <li>
                  <Link
                    to={{
                      pathname:
                        'https://www.linkedin.com/in/viktor-sheverdin-4062b674/',
                    }}
                    target='_blank'
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: 'https://github.com/ViktorSheverdin' }}
                    target='_blank'
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: 'https://www.instagram.com/viktor.sheverdin/',
                    }}
                    target='_blank'
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: 'https://www.facebook.com/viktor.sheverdin/',
                    }}
                    target='_blank'
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
