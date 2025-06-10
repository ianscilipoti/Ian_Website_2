import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTile = (props) => {
  return <div className={"skillSection collapseRow"} style={{alignItems:"start"}}>
    <div className={`skillInfo`}>
      <h1 className="myVoiceColor" style={{marginTop:"9px"}}>{props.title}</h1>
      <p dangerouslySetInnerHTML={{__html: props.node.html}}/>
    </div>
      <div className="borderRad skillImage" style={{filter:"drop-shadow(4px 6px 6px rgba(0, 0, 0, 0.1))", borderStyle:"solid", borderWidth:"4px", borderColor:"black"}}>
          <GatsbyImage 
            // className={i === (count%node.frontmatter.previewImgs.length) ? "fadeIn fade" : "fade"} 
            style={{position:"absolute", height:"100%"}} 
            image={getImage(props.image)} 
            alt=""
          />
      </div>
  </div>
  
  
  
  // <div className="projectTile" >
  //   <Link style={{textDecoration: "none", color:"inherit"}} to={props.slug}>
  //     <div className="portfolioContent collapseRow">
  //       <GatsbyImage className="projectTileImage borderRad" style={{flexShrink:"0"}} image={getImage(props.image)} alt={props.title}/> 
  //       <div className="portfolioInfo">
  //         {/* <div style={{display:"flex", flexDirection:"column", alignItems:"left", justifyContent:"space-between"}}> */}
  //           <h1 style={{margin:"0px"}}> {props.title} </h1>

  //           <div dangerouslySetInnerHTML={{__html: props.node.html}}/>
  //       </div> 
  //     </div>


      {/* relevant skills section */}
      {/* <div className="projectRelSkills">
        {props.skills.map(skill => <p 
          className="borderRad"
          key={skill}
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
      </div> */}
  //   </Link> 
  // </div>
}

const Work = (props) => {

  return <React.Fragment>
    <Background>
      <Header/>

      <div className="gallery" style={{marginTop:"60px"}}>
        <div className="galleryColumn"> 
          {props.data.allMarkdownRemark.nodes.map((node, i) => <ProjectTile 
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            image={node.frontmatter.previewImg.childImageSharp.gatsbyImageData}
            slug={"/portfolio"}
            skills={node.frontmatter.skills}
            node={node}
          />)}
        </div>
      </div>
      <Footer/>
    </Background>

  </React.Fragment>
}

export default Work

export const Head = () => (<>
  <title>Work</title>
  <meta name="description" content="Case studies from my professional life" />
</>)

export const pageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/portfolio/"}}
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
      html
    }
  }
}
`

// fields {
//   slug 
// }