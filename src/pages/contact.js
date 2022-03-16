import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <div class = "social">
          <p>
            Instagram: <a href="https://www.instagram.com/_shane_03/" target="_blank">&nbsp;_shane_03</a>
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github: <a href="https://github.com/Aman-03" target="_blank">&nbsp;&nbsp;Aman-03</a>
          </p>
          <p>
          &nbsp;&nbsp;LinkedIn: <a href="linkedin.com/in/aman-prasad-2033891bb/" target="_blank">&nbsp;&nbsp;Aman Prasad</a>
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail: <a href= "amanprasad1974@gmail.com" target="_blank">&nbsp;&nbsp;amanprasad1974@gmail.com</a>
          </p>
        </div>
      </Layout>
  )
}
export default ContactPage
