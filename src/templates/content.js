import React from 'react'
import { graphql, Link } from 'gatsby'
import "../styles/style.css"
import Header from "../components/header"
import Background from "../components/background"

const ContentPage = (props) => {
    const markdownRemark = props.data.markdownRemark;
    return <Background>
        <div style={{paddingTop:"30px", minHeight:"calc(100vh - 30px)"}}>
            {/* <Helmet>
                <title>{markdownRemark.frontmatter.title}</title>
                <meta name="description" content={markdownRemark.frontmatter.description} />
            </Helmet> */}
            <Header/>
 
            <div className="projectBody">
                <h1 className="myVoiceColor">
                    {markdownRemark.frontmatter.title}
                </h1>
                <div style={{fontSize:"110%"}} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                <Link style={{color:'inherit'}} to="/projects">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <h1 style={{margin:"0px"}}> View more projects </h1>

                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="projectTitleArrow" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                </Link>

            </div>
        </div>
    </Background> 
}



export default ContentPage

export const pageQuery = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug}}) {
        frontmatter {
            title
            description
        }
        fields {
            slug
            directory
        }
        html
    }
}`