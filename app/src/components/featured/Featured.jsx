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
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Listen here" />
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
            <div className="right">
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured