import React, { useEffect } from 'react';
import './Achievements.css'

import { useSelector } from 'react-redux';
import { selectUser } from '../../components/counter/counterSlice';

const END_POINT_ROOT = "http://mincasa.khademsam.com/"
const USER_RESOURCE = "API/v1/user/?username="

const Achievements = () => {
    const user = useSelector(selectUser)
    let info = {
        points: 0,
        badges: [],
        titles: [],
    }

    const parseData = (data) => {
        if (!data) {
            return null
        }

        const parsedData = JSON.parse(data)
        info.points = parsedData[0].points
    }

    const getInfo = () => {
        fetch(END_POINT_ROOT + USER_RESOURCE + user.username)
            .then(response => {
                return response.text()
            })
            .then(data => {
                parseData(data)
            })
    }

    useEffect(() => {
        console.log(user)
        getInfo()
    })

    return (
        // <div id='achievements-container'>
        //     <div id='achievements-bg'>
                <div id='achievements-card'>

                    <p id="achievements-username">{user.username}</p>

                    <div className="achievements-display-box">
                        <h5>Energy Points:</h5>
                        <p>{info.points}</p>
                    </div>

                    <div className="achievements-display-box">
                        <h5>Badges:</h5>
                        <p>{info.badges}</p>

                    </div>

                    <div className="achievements-display-box">
                        <h5>Titles:</h5>
                        <p>{info.titles}</p>
                    </div>
                </div>
        //     </div>
        // </div>
    );
};

export default Achievements;