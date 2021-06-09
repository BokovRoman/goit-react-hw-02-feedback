import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions= ({ onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback }) => {
    return (
        <>
          <button class="button" name="Good" type="button"
                        onClick={onLeaveGoodFeedback}>Good</button>
                    <button class="button" name="Neutral" type="button"
                        onClick={onLeaveNeutralFeedback}>Neutral</button>
                    <button class="button" name="Bad" type="button"
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