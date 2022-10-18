// import propTypes from 'prop-types';
import React from 'react';

const Statistics = ({ statisticData, title }) => {
  //   console.log(dataData);
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {statisticData.map(el => {
            const { label, percentage } = el;
            return (
              <li className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

// Statistics.propTypes = {
//   dataData: propTypes.object.isRequired,
// };

// export function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }

export default Statistics;
