import React from "react"
import { Link } from "gatsby"
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types"
const renderPrimaryNavbar = (data) => {
    return (
        <>
            <Nav>
                <Link to={`/#highlights`}>
                    {data.highlights}
                </Link>
            </Nav>
            <NavDropdown title="Products" id="basic-nav-dropdown" >
                {data.Products.map((item, index) => {
                    return (
                        <NavDropdown.Item key={index} href={`/#${item.href}`}>
                            {item.ProductsList}
                            <hr />
                        </NavDropdown.Item>
                    )
                })}
            </NavDropdown>
            <Nav>
                <Link to={`/#contact-us`}> {data.ContactUs}</Link>
            </Nav >
        </>
    )
}
const renderSecondaryNavbar = (data) => {
    return (
        <Link to={`/`}>{data.home}</Link>
    )
}
const Header = ({ data, pageContext }) => {
    return (
        < header >
            <Navbar expand="md" fixed="top">
                <Container>
                    <Link to="/"><img src={data.logoImage} alt="logo" className="logo" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto">
                            {(pageContext.pageType === "Landing Page") ? renderPrimaryNavbar(data) : renderSecondaryNavbar(data)}
                            {data.homeMenu.map((item, index) => {
                                return (
                                    <Nav key={index} >
                                        <Link to={item.path}>{item.navItem}</Link>
                                    </Nav>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}
Header.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.string.isRequired
    }),
}
Header.defaultProps = {
    pageContext: {
        pageType: ''
    },
}
export default Header;
