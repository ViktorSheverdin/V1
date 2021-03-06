import React, { useEffect, useState } from 'react';
// import { useFocusEffect } from '@react-navigation/native';

const ProgressBar = (props) => {
  const { completed } = props;
  var [completedPers, setCompleted] = useState(0);

  // useFocusEffect(() => {
  //   setCompleted(completed);
  // }, []);

  useEffect(() => {
    setCompleted(completed);
  }, []);

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 0,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completedPers}%`,
    transition: 'width 1s ease-in-out',
    backgroundImage: 'linear-gradient(90deg, #766dff 0%, #88f3ff 100%)',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 0,
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
