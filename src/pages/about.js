import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <div>
      <Layout> 
        <Head title="About" />
        <h1>About Me</h1>
        <p>I am currently a student of Computer Science, 3rd Year!</p>
        <br/>
        <p>
          Want to work with me?
          <Link to="/contact">Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage

