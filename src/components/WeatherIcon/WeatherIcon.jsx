import React from 'react'

const WeatherIcon = (props) => (
    !!props.iconIndex && (
        <img
            src={`https://developer.accuweather.com/sites/default/files/${
                props.iconIndex.toString().padStart(2, '0')
            }-s.png`}
            alt=""
        />
    )
)

export default WeatherIcon