import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const Welcome = () => {
  //   const [completed, setCompleted] = useState(0);

  //   useEffect(() => {
  //     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  //   }, []);
  return (
    <section class='welcome_area p_120'>
      <div class='container'>
        <div class='row welcome_inner'>
          <div class='col-lg-6'>
            <div class='welcome_text'>
              <h4>About Myself</h4>
              <p>
                I have been a system administrator for the past three years with
                a diploma on Computer Information Technology from BCIT.
                Throughout the years, I have worked with Houle's IT team
                deploying various custom scripts and application to automate
                tasks and enhance business processes. I am passionate about
                automation of tasks, building complex structures, learning and
                implementing new technologies.
                <br />I am very proficient with SCCM and Carbon Black security
                systems and end-user support. Lately, I have been dedicating
                majority of my time on furthering my knowledge on MERN stack
                (MongoDB, Express, React.js, Node,js), Full-Stack development
                focusing my interest mainly on Front-End development and intend
                to use this knowledge to serve as a valuable asset for Front-End
                developer. I am a detailed-oriented, hardworking and skilled
                professional that aspires to work with clean, easy to maintain
                code, knowledge of MVC model, and experience with lastest JS ES6
                functionality such as arrow functions and object destructuring.
              </p>
              <div class='row'>
                <div class='col-md-4'>
                  <div class='wel_item'>
                    {/* <!-- <i class="lnr lnr-database"></i> --> */}
                    <i class='fa fa-github' aria-hidden='true'></i>
                    <h4>39</h4>
                    <p>Github Repositories</p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='wel_item'>
                    <i class='fa fa-code' aria-hidden='true'></i>
                    <h4>9</h4>
                    <p>React/Node.js Projects</p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='wel_item'>
                    <i class='fa fa-search' aria-hidden='true'></i>
                    <h4>3</h4>
                    <p>Researches published</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-6'>
            <div class='tools_expert'>
              <div class='skill_main'>
                <div class='skill_item'>
                  <h4>
                    JavaScript ES6 <span class='counter'>85</span>%
                  </h4>
                  <div class='22222'>
                    <div class='progress_br'>
                      <div class='progress'>
                        <ProgressBar completed={85} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='skill_item'>
                  <h4>
                    React <span class='counter'>80</span>%
                  </h4>
                  <div class='progress_br'>
                    <div class='progress'>
                      <ProgressBar completed='80' />
                    </div>
                  </div>
                </div>
                <div class='skill_item'>
                  <h4>
                    Node.js <span class='counter'>70</span>%
                  </h4>
                  <div class='progress_br'>
                    <div class='progress'>
                      <ProgressBar completed='70' />
                    </div>
                  </div>
                </div>
                <div class='skill_item'>
                  <h4>
                    Redux <span class='counter'>60</span>%
                  </h4>
                  <div class='progress_br'>
                    <div class='progress'>
                      <ProgressBar completed='60' />
                    </div>
                  </div>
                </div>
                <div class='skill_item'>
                  <h4>
                    AWS <span class='counter'>40</span>%
                  </h4>
                  <div class='progress_br'>
                    <div class='progress'>
                      <ProgressBar completed='40' />
                    </div>
                  </div>
                </div>
                <div class='comment_skill_item'>
                  <i>
                    * probability of me solving a task requiring one of the
                    skills above
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
