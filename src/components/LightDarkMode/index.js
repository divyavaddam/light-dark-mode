// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    lightMode: false,
  }

  onModeChange = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  modeType = () => {
    const {lightMode} = this.state
    return lightMode ? 'light-mode-container' : 'dark-mode-container'
  }

  changeButtonText = () => {
    const {lightMode} = this.state
    return lightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    return (
      <div className="bg-container">
        <div className={this.modeType()}>
          <h1 className="heading">Click To Change Mood</h1>
          <button className="button" type="button" onClick={this.onModeChange}>
            {this.changeButtonText()}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
