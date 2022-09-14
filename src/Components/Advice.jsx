import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../style/Advice.css'

const Advice = () => {
    const [adviceData,setAdviceData] = useState({});

    const getData = () => {
        fetch('https://api.adviceslip.com/advice',{
            method:'GET',
            cache: 'no-cache'
        })
        .then(res => res.json())
        .then(data => setAdviceData(data))
    }
    
  return (
    <div className="advice-wrapper">
      {Object.keys(adviceData).length > 0 ? (
        <div className="advice-container">
          <p className="title">Advice # {adviceData?.slip?.id}</p>
          <p className="advice">"{adviceData?.slip?.advice}"</p>
          <div className="horizontal-line-container">
            <div className="h1"></div>
            <img src="/images/pause.svg" className="pause-icon" />
            <div className="h1"></div>
          </div>
          <div className="circle" onClick={getData}>
            <img src="/images/dice.png" className="dice" alt="dice" />
          </div>
        </div>
      ) : (
        <div className="advice-container">
            <p className='advice-first'>Press the Button to get Advice</p>
          <div className="horizontal-line-container">
            <div className="h1"></div>
            <img src="/images/pause.svg" className="pause-icon" alt='pause'/>
            <div className="h1"></div>
          </div>
          <div className="circle" onClick={getData}>
            <img src="/images/dice.png" className="dice" alt="dice" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Advice