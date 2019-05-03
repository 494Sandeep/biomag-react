import React from 'react'
import { graphql } from 'gatsby';
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../../layout/layout';
import SEO from "../../components/seo";

const TermsAndPolicy = ({ data }) => {
    const d = data.biomagJson.privacypolicy;
    return (
        <Layout>
            <SEO title='Terms & Policy' />
            <section id="privacypolicy">
                <Container>
                    <Row>
                        <Col className="p-0">
                            <div class="vmo-licence-title text-center">
                                <h1>{d.privacypolicyTitle}</h1>
                                <hr />
                            </div>
                            <Col md={12} className="mt-5">
                                <h4 className="vmo-licence-title">{d.privacypolicyMainHeading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: d.privacypolicycontent }} />
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default TermsAndPolicy
export const query = graphql`
    query getTermsAndPolicy{
        biomagJson{
            privacypolicy {
                privacypolicyTitle
                privacypolicyMainHeading
                privacypolicycontent
            }
        }
    }
`
