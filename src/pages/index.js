import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title = "Home"/>
      <h1 class = "hello">Hello!</h1>
      <h2 class="animation">
        <span class="text1">
        I'm Aman Prasad, a full-stack developer living in Gujarat.
        </span>
      </h2>
      <br/>
      <p>Need a Developer? <Link to = "/contact">Contact Me.</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage

