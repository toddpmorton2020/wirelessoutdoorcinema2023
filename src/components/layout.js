/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Cookies from "./cookies"
import "./layout.css"

const Layout = ({ children }) => {
  const [showCookie, setShowCookie] = useState(true)
  const [cookie, setCookie] = useState(undefined)
  useEffect(() => {
    setCookie(localStorage.getItem("cookie"))
  }, [])
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

        {!cookie && showCookie ? (
        <Cookies
          setCookies={() => {
            localStorage.setItem("cookie", true)
            setShowCookie(false)
          }}
        />
      ) : (
        ""
      )}

        <Footer />
       
    </>
  )
}

export default Layout
