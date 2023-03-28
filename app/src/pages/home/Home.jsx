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
    </div>
  )
}

export default Home