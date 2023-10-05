import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const DemoReel = () => {

  return <React.Fragment>
    <Header/>
    <Background>
      <p>
        Contact me
      </p>
    </Background>

    

  </React.Fragment>
}

export default DemoReel

export const Head = () => <title>Demo Reel</title>
