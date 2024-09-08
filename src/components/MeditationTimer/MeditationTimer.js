import React, { useState, useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import './MeditationTimer.scss';

const MeditationTimer = () => {
  const { time, setTime, isActive, toggleTimer, resetTimer } = useContext(TimerContext);
  const [inputTime, setInputTime] = useState(0);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputTime(e.target.value);
    setError(''); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTime <= 0) {
      setError('Set the timer to at least a minute.');  
    } else {
      setTime(inputTime * 60); 
      setError('');  
    }
  };

  return (
    <div className="meditation-timer">
      <h1>Meditation Timer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Set time in minutes"
          value={inputTime}
          onChange={handleChange}
          disabled={isActive}
        />
        <button type="submit" disabled={isActive}>Set</button>
      </form>

      {error && <p className="error-message">{error}</p>} {/* messaggio di errore */}

      <div className="timer-display">
        <h2>{`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</h2>
      </div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <p className='quote'>- " When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate. " -</p>
      <p>Meditation is a practice that involves focusing the mind to achieve a state of calm and clarity, it trains the mind to concentrate and redirect thoughts.</p>
    </div>
  );
};
export default MeditationTimer;
