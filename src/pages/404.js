import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => {

  return <Background>
    <Header/>

    <div style={{
      width:"100vw",
      height:"100vh"
    }}>
    <h1 className="myVoiceColor" style={{
      textAlign:"center", 
      paddingTop:"100px", 
      marginTop:"0px",
      paddingBottom:"auto"
      }}>
      404. Looks like you lost your way. Sorry about that!
    </h1>
    </div>
    
    
  </Background>
}

export default NotFoundPage

export const Head = () => <title>404</title>
