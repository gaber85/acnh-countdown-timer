import React, { useState } from 'react';
import moment from 'moment';
import momentTZ from 'moment-timezone';


import { useInterval } from '../hooks/useInterval';

const Countdown = () => {

  const releaseDate = momentTZ.tz('2020-03-20 00:00', 'America/Toronto');

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateCountdown = () => {
    const currentTime = moment();
    const countdown = moment.duration(releaseDate.diff(currentTime), 'milliseconds');
    setDays(Math.floor(countdown.asDays()));
    setHours(countdown.hours())
    setMinutes(countdown.minutes())
    setSeconds(countdown.seconds())
  }

  useInterval(updateCountdown, 1000);

  return (
    <>
    {seconds || minutes || hours || days || days === 0 ? 
      <div className='countdown-container'>
        <div>
          <p>{days}</p>
          <p>Days</p>
        </div>
        <div className='colon'>:</div>
        <div>
          <p>{hours}</p>
          <p>Hours</p>
        </div>
        <div className='colon'>:</div>
        <div>
          <p>{minutes}</p>
          <p>Minutes</p>
        </div>
        <div className='colon'>:</div>
        <div>
          <p>{seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    :

    (<div className="loader"></div>)
    }
    </>
  );
}



export default Countdown;