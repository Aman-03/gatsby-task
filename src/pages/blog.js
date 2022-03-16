import React from 'react'
import Layout from '../components/layout'
import { Link, graphql , useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'
const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {       
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
       }
    `)

console.log(data)

   return (
       <div>
           <Layout>
           <Head title = "Blog"/>
              <h1>Blog</h1>
              <ol className={blogStyles.posts}>
                  {data.allContentfulBlogPost.edges.map((edge) => {
                      return(
                            <li className={blogStyles.post}>
                                <Link to = {`/blog/${edge.node.slug}`}>
                                <h2>
                                    {edge.node.title}
                                </h2>
                                <p>
                                    {edge.node.publishedDate}
                                </p>
                                </Link>
                            </li>
                      )
                  })}
              </ol>
            </Layout>
       </div>
   )
}

export default BlogPage
