import React from 'react';


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

             
export default FeedbackOptions;