import PropTypes from 'prop-types';
import React from 'react';
import {
  StatisticsList,
  StatisticsListTitle,
  StatisticsItem,
} from './Statistics.styled';

const Statistics = ({ statisticData, title, id }) => {
  return (
    <>
      <StatisticsListTitle>
        {title && <h2 className="title">{title}</h2>}

        <StatisticsList>
          {statisticData.map(el => {
            const { label, percentage, id } = el;
            return (
              <StatisticsItem key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage} %</span>
              </StatisticsItem>
            );
          })}
        </StatisticsList>
      </StatisticsListTitle>
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
