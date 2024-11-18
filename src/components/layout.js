import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/global.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

export default Layout
