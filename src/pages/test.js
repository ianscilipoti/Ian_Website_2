import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Test = () => {

  return <React.Fragment>
    <div style={{
        height:"2000px"
    }}>
        <div style={{
            width:"500px",
            height:"1000px",
            backgroundColor:"red"
        }}>
            <div style={{
                position:"sticky",
                top:"0px",
                width:"500px",
                height:"100px",
                backgroundColor:"green"
            }}>

            </div>

        </div>
    </div>

  </React.Fragment>
}

export default Test

export const Head = () => <title>Home Page</title>