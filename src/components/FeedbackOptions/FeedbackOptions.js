import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


const FeedbackOptions= ({ onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback }) => {
    return (
        <>
          <button className={styles.button} name="Good" type="button"
                        onClick={onLeaveGoodFeedback}>Good</button>
                    <button className={styles.button} name="Neutral" type="button"
                        onClick={onLeaveNeutralFeedback}>Neutral</button>
                    <button className={styles.button} name="Bad" type="button"
                    onClick={onLeaveBadFeedback}>Bad</button>
        </>
    );
};

FeedbackOptions.propTypes = {
    onLeaveGoodFeedback: PropTypes.func.isRequired,
    onLeaveNeutralFeedback: PropTypes.func.isRequired,
    onLeaveBadFeedback: PropTypes.func.isRequired,
}
             
export default FeedbackOptions;