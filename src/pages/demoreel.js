import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const DemoReel = () => {

  return <Background>
    <Header/>
    

    <div style={{width:"100vw", height:"90vh", paddingTop:"70px", position:"relative"}}>
      <iframe src="https://player.vimeo.com/video/670963411?h=03762a7e44&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen 
              style={{top:0, left:0, width:"100%", height:"90%"}} 
              title="Ian Scilipoti Demo Reel 2022">
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </Background>
}

export default DemoReel

export const Head = () => (<>
  <title>Demo Reel</title>
  <meta name="description" content="See my demo reel" />
</>)
