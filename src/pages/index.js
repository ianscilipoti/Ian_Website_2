import * as React from "react"
import "../styles/style.css"
import {useState, useEffect, useRef} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/background"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
// import { Scrollama, Step } from 'react-scrollama';
import musicVideo from "../content/skills/Music/audioViz.mp4"
import proceduralVideo from "../content/skills/Procedural/Rivers_Small.mp4"
import fxVideo from "../content/skills/VFX/FireFX.mp4"
import codingVideo from "../content/skills/Coding/Coding.mp4"
import natureVideo from "../videos/Final4_compressed.mp4"

const IndexPage = (props) => {
  // const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [count, setCount] = useState(0);

  // const videoRef = useRef();

  //videos referenced in skills section can be defined here
  const videoLookup = {
    musicVideo:<video autoPlay={true} className="" loop playsInline muted style={{position:"absolute", height:"100%"}} >
      <source src={musicVideo} type="video/mp4" />
    </video>,
    proceduralVideo:<video autoPlay={true} className="" loop muted playsInline style={{position:"absolute", height:"100%"}} >
      <source src={proceduralVideo} type="video/mp4" />
    </video>,
    fxVideo:<video autoPlay={true} className="" loop muted playsInline style={{position:"absolute", height:"100%"}} >
      <source src={fxVideo} type="video/mp4" />
    </video>,
    codingVideo:<video autoPlay={true} className="" loop muted playsInline style={{position:"absolute", height:"100%"}} >
      <source src={codingVideo} type="video/mp4" />
    </video>,

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

  // useEffect(() => {
  //   videoRef.current.play();
  // });


  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  // const onStepEnter = ({ data }) => {
  //   setCurrentStepIndex(data);
  // };

  // const updateStepProgress = (progress) => {
  //   if (progress > 0.1) {
  //     if (progressStage != 1) {
  //       setProgressStage(1);
  //       console.log("set 1")
  //     }
  //   }
  //   else {
  //     if (progressStage != 0){
  //       setProgressStage(0);
  //     }
  //   }
  // }


  return <React.Fragment>
    
    <Background>
    <Header/>
    

    <div>
      {/* <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div> */}
      {/* <Scrollama offset={0.9} onStepEnter={onStepEnter} onStepProgress={({progress}) => updateStepProgress(progress)}>
        <Step data={0}> */}

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
                  playsInline
                  // ref={videoRef}
                  loop
                  muted 
                  style={
                    {
                      position:"absolute", 
                      minWidth:"100vw", 
                      minHeight:"100vh",
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
              width:"min(600px, 90%)", 
              textAlign:"center",
              position:"absolute",
              left:"50%",
              top:"50%",
              transform:"translate(-50%, -50%)",
              
            }
          }>
            <h1 
            className="myVoiceColor"
              style={{
                // textAlign:"center"
                fontSize:"200%",
                marginBottom:"10px",
                marginTop:"0px"
              }}
            >
              Hey there!
            </h1>

            <p>I am a multi-disciplinary technologist and artist.</p>

            <p>My work is inspired by a deep fascination with the nuances of nature, experience, and human connection.</p>

            <div
              style={{
                display:"flex",
                justifyContent:"space-between",
                marginTop:"55px",
                fontSize:"150%"
              }}
              className="collapseRow"
            >
              <Link to="/projects" className="links navColor">Projects</Link>
              <Link to="/demoreel" className="links navColor">Demo Reel</Link>
              <a href="mailto: ianscilipoti@gmail.com" className="links navColor">Email Me</a>
            
            </div>
          </div>

          <div style={{
            position:"absolute",
            left:"50%",
            top:"80vh",
            transform:"translateX(-50%)"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bobAnimation" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </div>

        </div>

        
        {/* </Step> */}

        <div style={{
          maxWidth:"1000px",
          margin:"auto"
        }}>


          <br/>
          {/* <Step data={1}> */}
          {/* <h1 className="myVoiceColor" 
            style={{
                fontSize:"5vw",
                marginBottom:"50px",
                textAlign:"center"
              }}>
            My Skills / What I Love
          </h1> */}
          {/* </Step> */}

          {props.data.allMarkdownRemark.nodes.map((node, j) => <div key={node.frontmatter.title}>
          {/* // <Step key={node.frontmatter.title} data={j+2}> */}
          
              <div className={`skillSection ${(j&1) === 0 ? "collapseRow" : "collapseRowRev"}`}>
                <div className={`skillInfo`}>
                  <h1 className="myVoiceColor">{node.frontmatter.title}</h1>
                  <p dangerouslySetInnerHTML={{__html: node.html}}/>
                </div>

                {/* <div className="borderRad skillImage"> */}
                  {node.frontmatter.videoKey == null ? 
                    <div className="borderRad skillImage">
                      {node.frontmatter.previewImgs.map((img, i) => 
                          <GatsbyImage 
                            className={i === (count%node.frontmatter.previewImgs.length) ? "fadeIn fade" : "fade"} 
                            style={{position:"absolute", height:"100%"}} 
                            key={img.childImageSharp.id} 
                            image={getImage(img.childImageSharp.gatsbyImageData)} 
                            alt=""
                          />
                      )}
                    </div>
                  : 
                    <div>
                      <div className="borderRad skillImage"> 
                        {videoLookup[node.frontmatter.videoKey]} 
                      </div>
                      <p className="videoCaption">{node.frontmatter.videoCaption ? node.frontmatter.videoCaption : ''}</p>
                    </div>
                  }
                  
                {/* </div> */}
                

              </div>
            </div>
          )}
          <h1 style={{paddingBottom:"50px", textAlign:"center", marginBottom:"0px"}}>Check out my <Link to="/projects" className="navColor links">projects page</Link> for more projects/details!</h1>
          
        </div>
        <Footer/>
        {/* </Step> */}
        
      {/* </Scrollama> */}
      
      
    </div>
    </Background>

  </React.Fragment>
}

export default IndexPage

export const Head = () => (<>
  <title>Home Page</title>
  <meta name="description" content="Contact me and learn all about what I do!" />
</>)

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
        previewImgs {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
        videoKey
        videoCaption
      }
    }
  }
}
`


