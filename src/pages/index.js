import * as React from "react"
import "../styles/style.css"
import {useState, useEffect, useRef} from "react"
import Header from "../components/header"
import Background from "../components/background"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage  } from "gatsby-plugin-image"
import { Scrollama, Step } from 'react-scrollama';
import musicVideo from "../content/skills/music/guitarLoop_outline.mp4"
import natureVideo from "../videos/Final4.mp4"

const IndexPage = (props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [count, setCount] = useState(0);

  const videoRef = useRef();

  const introVideoRef = useRef();
  const introVideoRevRef = useRef();


  //videos referenced in skills section can be defined here
  const videoLookup = {
    musicVideo:<video autoPlay={true} ref={videoRef} className="borderRad" loop muted style={{position:"absolute", height:"100%"}} >
      <source src={musicVideo} type="video/mp4" />
    </video>
  };

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
        setCount(count + 1);
    }, 6000);

    

    //Clearing the interval
    return () => {
      clearInterval(interval)
      // window.cancelAnimationFrame(req);
    };
  }, [count]);


  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const updateStepProgress = (progress) => {

  }


  return <React.Fragment>
    
    <Background>
    <Header/>
    

    <div>
      {/* <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div> */}
      <Scrollama offset={0.0} onStepEnter={onStepEnter} onStepProgress={({progress}) => updateStepProgress(progress)}>
        <Step data={0}>

        <div className="introSection"> 

          <div style={{
                position:"sticky",
                top:"0px",
                width:"100%",
                height:"100vh",
                backgroundColor:"black",
                overflow:"hidden",

          }}>
                <video 
                  preload={"auto"}
                  autoPlay={true} 
                  loop
                  ref={introVideoRef} 
                  muted 
                  style={
                    {
                      position:"absolute", 
                      minWidth:"100vw", 
                      minHeight:"100vh",
                      height:"100vh",
                      left:"50%",
                      transform:"translate(-50%, -50%)",
                      top:"50%"
                    }
                  }>
                  <source src={natureVideo} type="video/mp4" />
                </video>
          </div>

          <div style={
            {
              width:"50%", 
              textAlign:"center",
              position:"absolute",
              left:"50%",
              top:"50%",
              transform:"translate(-50%, -50%)"
            }
          }>
            <h1 
            className="myVoiceColor"
              style={{
                // textAlign:"center"
                fontSize:"9vw",
                marginBottom:"10px"
              }}
            >
              Hey there!
            </h1>

            <p>I am a multi-disciplinary technologist and artist</p>

            <p>My work is inspired by a deep fascination with the nuances of nature, experience, and human connection.</p>

            <div
              style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                marginTop:"30px"
              }}
            >
              <Link to="mailto: ianscilipoti@gmail.com" className="links">Email Me</Link>
              <Link to="https://www.instagram.com/ian.gs/" className="links">Instagram</Link>
              <Link to="https://github.com/ianscilipoti" className="links">GitHub</Link>
            
            </div>
          </div>

        </div>

        
        </Step>

        <Step data={1}>
          <h1 className="myVoiceColor" 
            style={{
                fontSize:"7vw",
                marginBottom:"50px",
                textAlign:"center"
              }}>
            My Skills / What I Love
          </h1>
        </Step>

        {props.data.allMarkdownRemark.nodes.map((node, j) => <Step key={node.frontmatter.title} data={j+2}>
         
            <div className={`skillSection ${(j&1) == 0 ? "collapseRow" : "collapseRowRev"}`}>
              <div className="skillInfo">
                <h1 className="myVoiceColor">{node.frontmatter.title}</h1>
                <p dangerouslySetInnerHTML={{__html: node.html}}/>
              </div>

              <div className="borderRad skillImage">
                {node.frontmatter.videoKey == null ?
                  node.frontmatter.previewImgs.map((img, i) => 
                    <GatsbyImage 
                      className={i == (count%node.frontmatter.previewImgs.length) ? "fadeIn fade" : "fade"} 
                      style={{position:"absolute", height:"100%"}} 
                      key={img.childImageSharp.id} 
                      image={getImage(img.childImageSharp.gatsbyImageData)} 
                      alt=""/>
                    )
                    :
                    videoLookup[node.frontmatter.videoKey]
                }
              </div>

            </div>
          </Step>
        )}
        
        
        

      </Scrollama>

      
    </div>
    </Background>

  </React.Fragment>
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/skills/"}}
    sort: {frontmatter: {order: ASC}}
    ) {
    nodes {
      html
      frontmatter {
        title
        dir
        videoKey
        previewImgs {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
      }
    }
  }
  allFile(
    filter: {ext: {eq: ".png"}, dir: {regex: "/growthSeq/"}}
    sort: {name: ASC}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
      extension
      dir
    }
  }
}
`


