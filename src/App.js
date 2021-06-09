import React, {Component} from 'react';
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';



class App extends Component{

    // Старый синтаксис
    // constructor() {
    //     super();

    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0,
    //     }
    // }

    state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }

    handleGoodIncrement = () => {
        this.setState((prevState) => ({
                good:prevState.good+1,

        }));
    };

    handleNeutralIncrement = () => {
        this.setState(prevState => ({
            neutral:prevState.neutral+1,
        }));
    };

    handleBadIncrement = () => {
        this.setState(prevState => ({
            bad: prevState.bad+1,
        }));
    };

 	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
    };
    
    countPositiveFeedbackPercentage = () => {
        const result = this.countTotalFeedback();
        const percentage = (this.state.good * 100) / result;
        return Math.round(percentage);
    };

    render() {
        return (
            <div className="Statistics">
                <section>
              <Section
                title="Please leave feedback">
                  <FeedbackOptions
                    onLeaveGoodFeedback={ this.handleGoodIncrement}
                    onLeaveNeutralFeedback={this.handleNeutralIncrement }
                    onLeaveBadFeedback={this.handleBadIncrement}
                  />
              </Section>
                </section>
                <section>
              <h2>Statistics</h2>
              {this.countTotalFeedback() === 0 ? (
                <Notification
                  message="No feedback given"
                />) : (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />)}
                </section>
            </div>
        );
    }
}
  

export default App;
