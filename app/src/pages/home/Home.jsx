import React from 'react'
import AsSeenOn from '../../components/asSeenOn/AsSeenOn'
import Featured from '../../components/featured/Featured'
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <AsSeenOn />
    </div>
  )
}

export default Home