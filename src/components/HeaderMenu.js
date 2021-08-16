import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeaderMenu = () => {
  return (
    <header class='header_area'>
      <div class='main_menu'>
        <nav class='navbar navbar-expand-lg navbar-light'>
          <div class='container box_1620'>
            <div>{/* <p class='mototext'>Create Improve Inspire</p> */}</div>
            {/* <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
            </button> */}
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              class='collapse navbar-collapse offset'
              id='navbarSupportedContent'
            >
              <ul class='nav navbar-nav menu_nav ml-auto'>
                <li class='nav-item active'>
                  {/* <Link class='nav-link' to='/'>
                    Home
                  </Link> */}
                  {/* <HashLink to='/#home'></HashLink> */}
                </li>
                <li class='nav-item'>
                  {/* <Link class='nav-link' to='/'>
                    Projects
                  </Link> */}
                  <HashLink class='nav-link' to='/#projects'>
                    Projects
                  </HashLink>
                </li>
                {/* <!-- <li class="nav-item submenu dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Pages</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a class="nav-link" href="portfolio.html">Portfolio</a></li>
                                <li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
                            </ul>
                        </li> --> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
