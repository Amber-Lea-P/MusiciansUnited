import React from 'react'
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect musician here!</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="" alt="" />
                        <input type="text" placeholder="Listen to our musicians play live" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Strings</button>
                    <button>Brass</button>
                    <button>Vocals</button>
                    <button>Digital</button>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Featured