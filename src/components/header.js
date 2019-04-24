import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
    <header style={{
        background: `#5b61a0`,
        marginBottom: `1.45rem`,
    }} >
        Header
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
