import * as React from "react"
import "../styles/style.css"
import {Link} from "gatsby"

const Header = () => {
  return <header className="header">
    <Link to="/" className="title headerItem myVoiceColor">Ian Scilipoti</Link>

    <div className="headerNav">
      <Link to="/portfolio" className="headerItem myVoiceColor">Portfolio</Link>    
      <Link to="/projects" className="headerItem myVoiceColor">My Projects</Link>    
    </div>
  </header>
}

export default Header