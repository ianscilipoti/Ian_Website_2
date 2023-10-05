import * as React from "react"
import "../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const Background = (props) => {
  return <div className="heroBG">
    {/* <StaticImage className="hero" alt="" src="../images/bg2.png"/> */}
    {/* <div /> */}
    {props.children}
  </div>
}


export default Background