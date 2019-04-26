import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

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
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
    })
    burger.classList.toggle('toggle')
}

const Header = () => {
    return (
        < header >
            <nav>
                <div className="logo">
                    <Link to="/">Biomag</Link>
                </div>
                <ul className="nav-lists">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/training">Traning</Link>
                    </li>
                    <li>
                        <Link to="/therapist">Therapists</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
                <div className="burger" onClick={handleNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header >
    )
}

// Header.propTypes = {
//     siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//     siteTitle: ``,
// }

export default Header