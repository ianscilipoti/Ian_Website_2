import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTile = (props) => {
  return <div className="projectTile">
    <Link className="projectTileLink" to={props.slug}>
      {/* relevant skills section */}
      <div className="projectRelSkills">
        {props.skills.map(skill => <p 
          className="borderRad"
          style={{
            margin:"6px",
            padding:"6px",
            fontSize:"80%",
            color:"lightgrey",
            backgroundColor:"rgb(50, 50, 50)",
            border:"solid",
            borderColor:"lightgray",
            borderWidth:"1.5px"
          }}>{skill}</p>)}
      </div>
      <GatsbyImage className="projectTileImage borderRad" image={getImage(props.image)} alt={props.title}/>  
      
      <div className="projectInfo">
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <h1 style={{margin:"0px"}}> {props.title} </h1>

          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="projectTitleArrow" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </div>
        
        <p className="projectDescription"> {props.description} </p>
      </div> 
    </Link> 
  </div>
}

const Projects = (props) => {

  return <React.Fragment>
    <Background>
      <Header/>

      <div className="gallery">
        {/* <div className="galleryColumn"> */}
          {props.data.allMarkdownRemark.nodes.map((node, i) => <ProjectTile 
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            image={node.frontmatter.previewImg.childImageSharp.gatsbyImageData}
            slug={node.fields.slug}
            skills={node.frontmatter.skills}
          />)}
        {/* </div> */}
      </div>
      <Footer/>
    </Background>

  </React.Fragment>
}

export default Projects

export const Head = () => (<>
  <title>Projects</title>
  <meta name="description" content="Explore all of my projects" />
</>)

export const pageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/projects/"}}
    sort: {frontmatter: {order: ASC}}
  ) {
    nodes {
      frontmatter {
        title
        description
        previewImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 100)
          }
        }
        skills
      }
      fields {
        slug
      }
    }
  }
}
`