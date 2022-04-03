import React, { useEffect } from 'react';
import './Achievements.css'

import { useSelector } from 'react-redux';
import { selectUser, updateUser } from '../../components/counter/counterSlice';

const END_POINT_ROOT = "http://mincasa.khademsam.com/"
const USER_RESOURCE = "API/v1/user/"

export default class Achievements extends React.Component {
  state = {
    user: '',
    points: 0,
    badges: [],
    titles: [],
    loaded: false,
  }

  parseData = (data) => {
    if (!data) {
      return null
    }
    const parsedData = JSON.parse(data)
    console.log(parsedData)

    let username = useSelector(selectUser)

    this.setState({ user: username })
    this.setState({ points: parsedData["points"] })
    this.setState({ loaded: true })
  }

  getInfo = () => {
    fetch(END_POINT_ROOT + USER_RESOURCE)
      .then(response => {
        return response.text()
      })
      .then(data => {
        this.parseData(data)
      })
  }

  componentDidMount() {
    this.getInfo()
  }

  renderApp() {
    return (
      <div id='achievements-container'>
        <div id='achievements-bg'>
          <div id='achievements-card'>

            <p id="achievements-username">Username</p>

            <div className="achievements-display-box">
              <h5>Energy Points:</h5>
              <p>1923</p>
            </div>

            <div className="achievements-display-box">
              <h5>Badges:</h5>
              <p>first 100, 5 months, energy saver</p>

            </div>

            <div className="achievements-display-box">
              <h5>Titles:</h5>
              <p>beginner, intermediate, pro</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  render() {
    return (this.state.loaded ? this.renderApp() : <span>Loading data...</span>)
  }
};

