import React from 'react';

const EducationList = () => {
  return (
    <div
      class='tab-pane fade show active'
      id='home'
      role='tabpanel'
      aria-labelledby='home-tab'
    >
      <ul class='list'>
        <li>
          <span></span>
          <div class='media'>
            <div class='d-flex'>
              <p>May 2021 to July 2021</p>
            </div>
            <div class='media-body'>
              <h4>MERN full-stack development</h4>
              <p>
                Udemy
                <br />
                Online
              </p>
            </div>
          </div>
        </li>
        <li>
          <span></span>
          <div class='media'>
            <div class='d-flex'>
              <p>Jan 2021 to March 2021</p>
            </div>
            <div class='media-body'>
              <h4>SCCM Foundation</h4>
              <p>
                Pluralsight
                <br />
                Online
              </p>
            </div>
          </div>
        </li>
        <li>
          <span></span>
          <div class='media'>
            <div class='d-flex'>
              <p>September 2017 Dec 2019</p>
            </div>
            <div class='media-body'>
              <h4>Computer Information Technology</h4>
              <p>
                BCIT <br />
                Vancouver
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EducationList;
