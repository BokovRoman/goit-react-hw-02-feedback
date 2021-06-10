import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({stat, good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h2 className={styles.title}>{stat}</h2>
            <ul className={styles.list}>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total:{total}</p></li>
                <li><p>Positive feedback:{positivePercentage}%</p></li>
            </ul>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
             
export default Statistics;