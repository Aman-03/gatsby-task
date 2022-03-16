import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            title
            contentful_id
            __typename
            gatsbyImageData(width:1600)
            description
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { gatsbyImageData, description } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return(
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        )
          
      },
    },
  }
  return (
    <Layout>
       <Head title = {props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {
        documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPost.body.raw)
        )
        &&
        renderRichText(
          props.data.contentfulBlogPost.body, options
        )
      }
    </Layout>
  )
}

export default Blog
