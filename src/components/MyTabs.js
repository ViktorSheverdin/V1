import React, { useState } from 'react';
import EducationList from './subcomponents/EducationList';
import ExperienceList from './subcomponents/ExperienceList';

const MyTabs = () => {
  const [tab, changeTab] = useState(true);

  const changeToExperience = () => {
    changeTab(true);
  };
  const changeToEducation = () => {
    changeTab(false);
  };

  // let opasity =
  return (
    <section class='mytabs_area p_120'>
      <div class='container'>
        <div class='tabs_inner'>
          <ul class='nav nav-tabs' id='myTab' role='tablist'>
            <li class='nav-item'>
              <button
                class='nav-link active'
                id='profile-tab'
                data-toggle='tab'
                role='tab'
                aria-controls='profile'
                aria-selected='true'
                onClick={() => changeToExperience()}
              >
                Experience
              </button>
            </li>
            <li class='nav-item'>
              <button
                class='nav-link'
                id='profile-tab'
                data-toggle='tab'
                role='tab'
                aria-controls='profile'
                aria-selected='false'
                backgroundColor={tab ? 'red' : 'white'}
                onClick={() => changeToEducation()}
              >
                Education
              </button>
            </li>
          </ul>

          <div class='tab-content' id='myTabContent'>
            {tab ? <ExperienceList /> : <EducationList />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTabs;
