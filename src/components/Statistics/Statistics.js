import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ statisticData, title, id }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {statisticData.map(el => {
            const { label, percentage, id } = el;
            return (
              <li key={id} className="item">
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

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
