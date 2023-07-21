import React from 'react'
import map from "../assets/images/maps/maps.png"
import "../styles/Maps.scss";

const Maps = () => {
  return (
    <div className='bgMap text-center'>
       <img src={map} alt='world map'/>
    </div>
  )
}

export default Maps
