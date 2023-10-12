import * as React from "react"
import "../styles/style.css"
import {Link} from "gatsby"

const Footer = () => {
  return <footer>
        <p style={{marginBottom:"0px", padding:"20px"}}>Copyright © Ian Scilipoti {new Date().getFullYear()}</p>
  </footer>
}

export default Footer