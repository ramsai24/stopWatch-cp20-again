// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: '00', seconds: '00', status: false}

  componentDidMount() {
    this.timerId = setInterval(this.starts, 1000)
  }

  starts = () => {
    const {status, seconds, minutes} = this.state
    // console.log(seconds === 59)

    if (status) {
      if (seconds < 9) {
        this.setState(prev => ({seconds: `0${parseInt(prev.seconds) + 1}`}))
      } else if (parseInt(seconds) === 59) {
        if (minutes < 9) {
          this.setState(prev => ({
            minutes: `0${parseInt(prev.minutes) + 1}`,
            seconds: '00',
          }))
        } else {
          this.setState(prev => ({
            minutes: `${parseInt(prev.minutes) + 1}`,
            seconds: '00',
          }))
        }
      } else {
        // console.log(status)
        this.setState(prev => ({seconds: `${parseInt(prev.seconds) + 1}`}))
      }
    }
  }

  start = () => this.setState({status: true})

  stop = () => this.setState({status: false})

  reset = () => this.setState({minutes: '00', seconds: '00'})

  render() {
    const {minutes, seconds} = this.state
    //  console.log(status)

    return (
      <div>
        <div>
          <h1>Stopwatch</h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{`${minutes}:${seconds}`}</h1>
            <button type="button" onClick={this.start}>
              Start
            </button>
            <button type="button" onClick={this.stop}>
              Stop
            </button>
            <button type="button" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
