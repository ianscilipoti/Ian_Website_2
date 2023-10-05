import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Background from "../components/background"

const GalleryTile = (props) => {
  return <div className="galleryTile">
    
    <div className="borderRad">
      <h1 className="galleryTileTitle"> {props.name} </h1>
      <GatsbyImage className="galleryImage" image={getImage(props.image)} alt={props.name}/>  
    </div>
  </div>
}

const GalleryPage = (props) => {

  const leftColTiles = [];
  const rightColTiles = [];

  props.data.allFile.nodes.forEach((node, i) => {
    if ((i&1) == 0) {
      leftColTiles.push(<GalleryTile  key={`left ${node.name}`} name={node.name} image={node.childImageSharp.gatsbyImageData}/>);
    }
    else {
      rightColTiles.push(<GalleryTile  key={`right ${node.name}`} name={node.name} image={node.childImageSharp.gatsbyImageData}/>);
    }
  });

  console.log(leftColTiles);

  return <div>
    <Background>
      <Header/>
      <div className="gallery">


        <div className="galleryColumn">
          {leftColTiles}
        </div>
        <div className="galleryColumn">
          {rightColTiles}
        </div>
        
      </div>

      <div className="galleryModal">
      </div>
    </Background>

  </div>
}

export default GalleryPage

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
query {
  allFile(
    filter: {relativeDirectory: {regex: "/gallery/"}}
    sort: {modifiedTime: DESC}
  ) {
    nodes {
      relativeDirectory
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 75)
      }
      name
    }
  }
}
`


