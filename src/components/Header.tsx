import React, { useState, useEffect } from 'react';
import './header.css';

const Header: React.FC = () => {
  const getGeorgiaDateTime = (): { day: string; time: string } => {
    const georgiaTimeZone = 'Asia/Tbilisi';
    const options = {
      timeZone: georgiaTimeZone,
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const date = new Date();
    const day = date.toLocaleDateString('en-US', { timeZone: georgiaTimeZone, weekday: 'short' });
    const time = date.toLocaleTimeString('en-US',);

    console.log(options)
    return { day, time };
  };

  const [georgiaDateTime, setGeorgiaDateTime] = useState<{ day: string; time: string }>(getGeorgiaDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGeorgiaDateTime(getGeorgiaDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  return (
    <>
      <div className="main">
        <div className="imgdiv">
          <img className='imgb' src="/assets/back.svg" alt="" />
          <h1 className='day'>{georgiaDateTime.day}</h1>
          <h2 className='time'>{georgiaDateTime.time}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
