import * as React from "react"
import "../styles/style.css"
import {Link} from "gatsby"

const Header = () => {
  return <header className="header">
        <Link to="/" className="title headerItem myVoiceColor">Ian Scilipoti</Link>

        <div className="headerNav">
            {/* <Link to="/gallery" className="headerItem myVoiceColor">Gallery</Link> */}
            {/* <Link to="/about" className="headerItem">About</Link> */}
            <Link to="/projects" className="headerItem myVoiceColor">Projects</Link>
            {/* <Link to="/music" className="headerItem">Music</Link> */}
            <Link to="/demoreel" className="headerItem myVoiceColor">Demo Reel</Link>
            {/* <Link to="/contact" className="headerItem">Contact</Link> */}
        </div>
  </header>
}

export default Header