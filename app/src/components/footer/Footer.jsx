import React from 'react'
import "./Footer.scss"
//span was used for UI purposes only, these span elements could be easily turned into active links
const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Brass</span>
          <span>Strings</span>
          <span>Woodwind</span>
          <span>Keyboards</span>
          <span>Percussions</span>
          <span>Vocals</span>
          <span>Digitial Music & Other</span>
          <span>Group Artist</span>
          <span>Sitemap</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>Press & News</span>
          <span>Partnerships</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Intellectual Property Claims</span>
          <span>Investor Relations</span>
          <span>Contact Sales</span>
        </div>
        <div className="item">
          <h2>Support</h2>
          <span>Help & Support</span>
          <span>Trust & Safety</span>
          <span>Connecting on MusiciansUnited</span>
        </div>
        <div className="item">
          <h2>Community</h2>
          <span>Customer Success Stories</span>
          <span>Community hub</span>
          <span>Forum</span>
          <span>Events</span>
          <span>Blog</span>
          <span>Influencers</span>
          <span>Affiliates</span>
          <span>Podcast</span>
          <span>Invite a Friend</span>
          <span>Become a MU Musician</span>
          <span>Community Standards</span>
        </div>
        <div className="item">
          <h2>More From MusiciansUnited</h2>
          <span>MusiciansUnited Business</span>
          <span>MusiciansUnited Pro</span>
          <span>MusiciansUnited Guides</span>
          <span>Get Inspired</span>
          <span>MusiciansUnited Workspace</span>
          <span>Learn</span>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="left">
          <h2>MusiciansUnited</h2>
          <span>© MusiciansUnited International Ltd. 2023</span>
        </div>
      
        <div className="right">
          <div className="social">
            <img src="/img/twitter.png" alt="" />
            <img src="/img/facebook.png" alt="" />
            <img src="/img/linkedin.png" alt="" />
            <img src="/img/pinterest.png" alt="" />
            <img src="/img/instagram.png" alt="" />
          </div>
          <div className="link">
            <img src="/img/language.png" alt="" />
            <span>English</span>
          </div>
          <img src="/img/accessibility.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
// the icons also are just for show but can also be easily updated to links to our social services
export default Footer