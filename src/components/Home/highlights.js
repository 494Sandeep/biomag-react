import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

const Highlights = () => {
    const { biomagJson } = useStaticQuery(graphql`
    {
        biomagJson {
            highlights {
                background
                highlightsTitle
                highlightsSubtitile
                highlightsImage {
                    childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                }
                highlights {
                    id
                    highlightsNumber
                    highlightsHeading
                    highlightsDescription 
                }
            }
        }
    }
    `)
    const data = biomagJson.highlights;
    return (
        <div id="highlights" style={{ backgroundImage: `url("${data.background}")` }}>
            <Container>
                <Row>
                    <Col md={7}></Col>
                    <Col md={{ span: 4, offset: 1 }} >
                        <Img fluid={data.highlightsImage.childImageSharp.fluid} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Highlights
