import * as React from "react"
import "../styles/style.css"
// import {useState} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/background"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage, getImage  } from "gatsby-plugin-image"
// import { Scrollama, Step } from 'react-scrollama';
import musicVideo from "../content/skills/Music/audioViz3.mp4"
import proceduralVideo from "../content/skills/Procedural/Rivers_Small.mp4"
import fxVideo from "../content/skills/VFX/FireFX.mp4"
import codingVideo from "../content/skills/Coding/Coding.mp4"
import artVideo from "../content/skills/Art/art1.mp4"
// import natureVideo from "../videos/Final4.mp4"

const IndexPage = (props) => {
  // const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // const [count, setCount] = useState(0);

  // const videoRef = useRef();

  //videos referenced in skills section can be defined here
  const videoLookup = {
    musicVideo:<video autoPlay={true} className="borderRad skillVideo" loop playsInline muted>
      <source src={musicVideo} type="video/mp4" />
    </video>,
    proceduralVideo:<video autoPlay={true} className="borderRad skillVideo" loop muted playsInline>
      <source src={proceduralVideo} type="video/mp4" />
    </video>,
    fxVideo:<video autoPlay={true} className="borderRad skillVideo" loop muted playsInline>
      <source src={fxVideo} type="video/mp4" />
    </video>,
    codingVideo:<video autoPlay={true} className="borderRad skillVideo" loop muted playsInline>
      <source src={codingVideo} type="video/mp4" />
    </video>,
    artVideo:<video autoPlay={true} className="borderRad skillVideo" loop muted playsInline>
    <source src={artVideo} type="video/mp4" />
  </video>,

  };

  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //       setCount(count + 1);
  //   }, 6000);

    

  //   //Clearing the interval
  //   return () => {
  //     clearInterval(interval)
  //     // window.cancelAnimationFrame(req);
  //   };
  // }, [count]);


  return <React.Fragment>
    
    <Background>
    <Header/>
    

    <div>
        <div className="introSection"> 
          <div className="collapseRow" style={
            {
              display:"flex", 
              justifyContent:"space-between",
              alignItems:"flex-start",
              // justifyContent:"start",
              width:"min(900px, 90%)", 
              left:"50%",
              top:"50%",
              position:"absolute",
              transform:"translate(-50%, -75%)",
            }}>

            <div style={
              {
                width:"min(500px, 90%)", 
                // textAlign:"center",
                // position:"absolute",
                // left:"50%",
                // top:"50%",
                // transform:"translate(-50%, -50%)",
                
              }
            } className="heroFont">

              <p className="myVoiceColor"> Hello! </p>

              <p> I am a curiosity driven cross-functional technologist with a knack for communication and empathy.</p>
                
              <p> I believe that asking the right questions is half the battle. I seek purpose and intentionality in my work. </p>

              {/* <div
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  marginTop:"55px",
                  fontSize:"150%"
                }}
                className="collapseRow"
              >
                <Link to="/Work" className="links navColor">Case Studies</Link>
                <Link to="/projects" className="links navColor">Projects</Link>
                <a href="mailto: ianscilipoti@gmail.com" className="links navColor">Email Me</a>
              
              </div> */}
            </div>

            <div style={{
              flexDirection:"column",
              alignItems:"center",
              display:"flex",
              width:"min(300px, 50%)", 
              height:"min(300px, 50%)", 
            }}>
              <StaticImage 
                className="borderRad"
                style={{
                  
                  // borderRadius:"25%"
                }} 
                src={"../content/skills/Ian/ian2.jpeg"} 
                alt=""
              />
              <a href="mailto: ianscilipoti@gmail.com" style={{marginTop:"10px"}} className="links myVoiceColor">Email Me!</a>
            </div>
            
          </div>

          <p style={{
            position:"absolute",
            width:"100%",
            textAlign:"center",
            top:"67vh"
          }} className="myVoiceColor">Professional Expertise:</p>

          <p style={{
            position:"absolute",
            width:"100%",
            textAlign:"center",
            top:"70vh"
          }}>Full stack prototyping/dev • Vendor/client communication • Emerging technology • Technical liaison</p>

          <div style={{
            position:"absolute",
            left:"50%",
            top:"85vh",
            transform:"translateX(-50%)",
            display:"flex", 
            flexDirection:"row",
            justifyContent:"start",
            flexGrow:"0"
          }}>
            {/* <Link to="/portfolio" className="myVoiceColor links">Check out my portfolio</Link> 
            <p style={{margin:"0px 30px"}}>or </p> */}
            <div style={{
              display:"flex",
              alignItems:"center",
              textAlign:"center",
              flexDirection:"column"
            }}>
              <p style={{marginTop:"0px"}}>more about me</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bobAnimation" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
            </div>
          </div>

        </div>

        
        {/* </Step> */}

        <div style={{
          maxWidth:"1000px",
          margin:"auto"
        }}>

          <br/>

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
                            // className={i === (count%node.frontmatter.previewImgs.length) ? "fadeIn fade" : "fade"} 
                            style={{position:"absolute", height:"100%"}} 
                            key={img.childImageSharp.id} 
                            image={getImage(img.childImageSharp.gatsbyImageData)} 
                            alt=""
                          />
                      )}
                    </div>
                  : 
                    <div className=" skillImage">
                      {videoLookup[node.frontmatter.videoKey]} 
                      <p className="videoCaption">{node.frontmatter.videoCaption ? node.frontmatter.videoCaption : ''}</p>
                    </div>
                  }
                  
                {/* </div> */}
                

              </div>
            </div>
          )}
          <h1 style={{paddingBottom:"50px", textAlign:"center", marginBottom:"0px"}}>Check out my <Link to="/portfolio" className="myVoiceColor links">portfolio</Link> for examples of my professional contributions and my <Link to="/projects" className="myVoiceColor links">projects page</Link> for my personal work!</h1>
          
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


