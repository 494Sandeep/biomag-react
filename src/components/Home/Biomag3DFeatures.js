import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'
//components
import PractitionerWidgets from "./PractitionerWidgets";

const Biomag3DFeatures = () => {
    const { biomagJson } = useStaticQuery(graphql`
        {
  biomagJson {
    Biomag3DFeatures {
      Biomag3DTitle
      Biomag3dappButtonImgLink
      Biomag3DDownloadLink
      Biomag3DImage {
        childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
      }
      Biomag3DAppleDownload {
         childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
      }
      Biomag3DAndroidDownload {
        childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
      }
      Biomag3DWidgets {
        Biomag3DIcon {
           childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
        }
        Biomag3DHeading
        Biomag3DDescription
        id
      }
    }
  }
}
    `)
    const data = biomagJson.Biomag3DFeatures;
    return (
        <div id="Biomag3DFeatures">
            <Container>
                <Row>
                    <Col>
                        <h1 className="section-heading">  {data.Biomag3DTitle}</h1>
                    </Col>
                </Row>
                <Row className="Biomag3DFeaturesBotton mb-5">
                    <Col xs={4} sm={3} md={2} className="p-0 ml-auto">
                        <Img fluid={data.Biomag3DAppleDownload.childImageSharp.fluid} />
                    </Col>
                    <Col xs={4} sm={3} md={2} className="p-0 mr-auto">
                        <Img fluid={data.Biomag3DAndroidDownload.childImageSharp.fluid} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Img fluid={data.Biomag3DImage.childImageSharp.fluid} />
                    </Col>
                    <Col md={8}>
                        <Row>
                            {data.Biomag3DWidgets.map((item, id) => {
                                return (
                                    <Col md={6} sm={12} key={id} >
                                        < PractitionerWidgets
                                            fluid={item.Biomag3DIcon.childImageSharp.fluid}
                                            heading={item.Biomag3DHeading}
                                            content={item.Biomag3DDescription} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Biomag3DFeatures
