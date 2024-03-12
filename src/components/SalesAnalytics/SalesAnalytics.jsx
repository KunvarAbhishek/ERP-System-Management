import React from 'react'
import './SalesAnalytics.css'
import {SalesAnalytics} from '../../Data/Data'

const Updates = () => {
  return (
    <div className="Updates">
      {SalesAnalytics.map((update) => {
        const isNegative = update.noti.includes('-');
        return (
          <div className="update" key={update.name}>
            <img src={update.img} alt="User" />
            <div className="noti">
              <div style={{ marginBottom: '0.1rem' }}>
                <span>{update.name}</span>
                <div>
                  <span style={{ color: isNegative ? 'red' : '#00c511', fontWeight: 'bold', marginRight: '1rem' }}>
                    {update.noti.split(' ')[0]}
                  </span>{' '}
                  <span>{update.noti.split(' ')[1]}</span>
                </div>
              </div>
              <span style={{ fontSize: '0.6rem', color: 'grey' }}>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Updates

