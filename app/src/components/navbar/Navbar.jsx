import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss"


const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} =useLocation()

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(() => {
      window.addEventListener("scroll", isActive);

      return ()=>{
        window.removeEventListener("scroll", isActive);
      }
    }, []);

    const currentUser ={
        id:1,
        username:"Musician",
        isSeller:true
    }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className="link"> 
                <span className="text">MusiciansUnited</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>MU Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a MU Musician</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="http://0.gravatar.com/avatar/5a3c0aa1ec17a4ada0d99fb8372fa225?s=300" alt=""/>
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link className="link" to="/mygigs">Gigs</Link>
                                   
                                    </>
                                )}
                                <Link className="link" to="orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" to="/">Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
            {(active || pathname !=="/" ) && 
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">Brass</Link>
                        <Link className="link" to="/">Strings</Link>
                        <Link className="link" to="/">Woodwind</Link>
                        <Link className="link" to="/">Percussions</Link>
                        <Link className="link" to="/">Keyboards</Link>
                        <Link className="link" to="/">Vocals</Link>
                        <Link className="link" to="/">Digital Music & Other</Link>
                    </div>
                </>
            }
    </div>
  )
}

export default Navbar