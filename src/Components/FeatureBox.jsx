import React from 'react'

export const FeatureBox = ({title, image}) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt=""/>
      </div>
      <div className="a-b-text">
        <h2>{title}</h2>  
        <p>Lorem ipsum dolor sit amet, qui minim adipisicin.</p>    
      </div>

    </div>
  )
}
