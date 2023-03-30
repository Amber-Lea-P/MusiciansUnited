import React from 'react'
import AsSeenOn from '../../components/asSeenOn/AsSeenOn'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import "./Home.scss"


const Home = () => {
  return (
    <div className="home">
      <Featured />
      <AsSeenOn />
      <Slide /> 

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of musical talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Location is no longer a problem
            </div>
            <p>
              Find talented musicians from all over the world!
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality ratings
            </div>
            <p>
              Are you curious about a musician? Check their profile out and view their star rating. Also view what services they have available. 
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Easy communication, at your fingertips. 
            </div>
            <p>
              Utilize the private chat area to talk to other MU members.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              At MU we strive to provide our musicians with the best way to connect with other musicians.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.png" controls />
          </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Home