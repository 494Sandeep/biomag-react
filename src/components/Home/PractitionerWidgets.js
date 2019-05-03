import React from 'react'
import Img from "gatsby-image";
import PropTypes from "prop-types"

const PractitionerWidgets = ({ fluid, heading, content }) => {
    return (
        <div className="PractitionerWidgets">
            <Img fluid={fluid} className="Practitioner_icon" />
            <h6 className="feature-title">{heading}</h6>
            <h6 className="grey-text">{content}</h6>
        </div >
    )
}


PractitionerWidgets.propTypes = {
    fluid: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

PractitionerWidgets.defaultProps = {
    fluid: {},
    heading: '',
    content: ''
}
export default PractitionerWidgets
