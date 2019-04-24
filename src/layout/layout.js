import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "./layout.css"
import Footer from "../components/footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
            query layoutQuery{
                biomagJson {
                    footer {
                        copyright
                        privacypolicyTitle
                        createdBy
                        ConsumerReviewDisclaimer
                        NonMedicalDeviceDisclaimer
                    }
                }
                site {
                    siteMetadata {
                        title
                    }
                }
            }`)
    console.log(data)
    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
            </div>
            <Footer data={data.biomagJson} />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout
