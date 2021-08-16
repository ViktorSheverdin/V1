import React from 'react';

const ExperienceList = () => {
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
              <p>Sep 2019 to present</p>
            </div>
            <div class='media-body'>
              <h4>System administrator</h4>
              <p>
                Houle Electric Ltd <br />
                Burnaby
              </p>
            </div>
          </div>
        </li>
        <li>
          <span></span>
          <div class='media'>
            <div class='d-flex'>
              <p>Jan 2019 to Sep 2019</p>
            </div>
            <div class='media-body'>
              <h4>Co-Op System administrator</h4>
              <p>
                Houle Electric Ltd <br />
                Burnaby
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceList;
