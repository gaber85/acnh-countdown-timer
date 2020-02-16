import React, { useState } from 'react';
import moment from 'moment';

import { useInterval } from '../hooks/useInterval';

const Countdown = () => {

  const releaseDate = moment('03-20-2020', 'MM DD YYYY, h:mm a');

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

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
    {days ? 
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