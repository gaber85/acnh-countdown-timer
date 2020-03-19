import React, { useState } from 'react';
import moment from 'moment';
import momentTZ from 'moment-timezone';


import { useInterval } from '../hooks/useInterval';

const Countdown = () => {

  const releaseDate = momentTZ.tz('2020-03-20 00:00', 'America/Toronto');

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

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