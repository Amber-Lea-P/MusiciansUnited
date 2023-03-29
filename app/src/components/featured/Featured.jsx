import React from 'react'
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Connect with other musicians!</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Search musicians" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Strings</button>
                    <button>Brass</button>
                    <button>Vocals</button>
                    <button>Keyboards</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/woman.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured