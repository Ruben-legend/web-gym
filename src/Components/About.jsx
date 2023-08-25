import React from 'react'
import aboutimage from '../images/about.jpg'

export const About = () => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nostrum ipsam delectus sed laboriosam sit modi laborum. 
                Eum, minus vel nostrum officiis voluptatum reprehenderit
                ratione quas enim doloremque illum? Perferendis, voluptatibus?
            </p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}
