import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap";
import PropTypes from "prop-types"

//components

const handleNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-lists')
    const navList = document.querySelectorAll('.nav-lists li')

    nav.classList.toggle('nav-active');
    navList.forEach((link, index) => {
        if (link.style.animation)
            link.style.animation = "";
        else
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`
    })
    burger.classList.toggle('toggle')
}
const renderPrimaryNavbar = (data) => {
    return (
        <>
            <li>
                <Link to={`/#${data.highlights}`}>{data.highlights}</Link>
            </li>
            <li>
                <Link to={`/#products`}>Products</Link>
                {/* <ul className="dropdown-menu">
                                {data.Products.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.href}>{item.ProductsList}</Link>
                                        </li>
                                    )
                                })
                                }
                            </ul> */}
            </li>
            <li>
                <Link to={`/#Contact_Us`}>{data.ContactUs}</Link>
            </li>
        </>
    )
}
const renderSecondaryNavbar = (data) => {
    return (
        <>
            <li>
                <Link to={`/#Contact_Us`}>{data.home}</Link>
            </li>
        </>
    )
}
const Header = ({ data, pageContext }) => {
    return (
        < header >
            <Container>
                <nav>
                    <div className="logo">
                        <Link to="/">Biomag</Link>
                    </div>
                    <ul className="nav-lists">
                        {(pageContext.pageType === "Landing Page") ? renderPrimaryNavbar(data) : renderSecondaryNavbar(data)}
                        {data.homeMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link to={item.path}>{item.navItem}</Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="burger" onClick={handleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </Container>
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
