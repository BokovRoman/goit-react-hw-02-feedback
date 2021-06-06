import React from 'react';

class Statistics extends React.Component{

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

    handleIncrement=(event)=> {
        console.log("Click1");
        console.log(event.target);
    }

    render() {
        return (
            <div className="Statistics">
                <section>
                    <h2>Please leave feedback</h2>
                    <button class="button" name="Good" type="button"
                        onClick={this.handleIncrement}>Good</button>
                    <button class="button" name="Neutral" type="button"
                        onClick={()=>{console.log('CLick2')}}>Neutral</button>
                    <button class="button" name="Bad" type="button">Bad</button>
                </section>
                <section>
                    <h2>Statistics</h2>
                    <p>No feedback given</p>
                    <ul>
                        <li><p>Good: {this.state.good}</p></li>
                        <li><p>Neutral: {this.state.neutral}</p></li>
                        <li><p>Bad: {this.state.bad}</p></li>
                        <li><p>Total:1</p></li>
                        <li><p>Positive feedback:100%</p></li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Statistics;