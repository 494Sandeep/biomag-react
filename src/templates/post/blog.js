import React from 'react'
import { graphql } from 'gatsby';
import _ from "lodash";
import Disqus from "disqus-react";
import Img from 'gatsby-image'
import Layout from "../../layout/layout";
import { Row, Col, Container } from "react-bootstrap";

const BlogPage = ({ data, pageContext }) => {
    const singleBlog = _.filter(data.biomagJson.blog.blogDescription, ['path', pageContext.pageURL]);
    let Blog = singleBlog[0]

    return (
        <Layout>
            <Container id="singleBlog">
                <Row className="justify-content-md-center">
                    <Col md={8} className="mb-2">
                        <h4 className="blog-detail-pageHeading">
                            <strong>
                                {Blog.blogName}
                            </strong>
                        </h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-2" style={{ minHeight: '73px' }}>
                    <Col md={8}>
                        <Row>
                            <Col md={5} sm={12}>
                                <Row>
                                    <Col sm={3} md={3}>
                                        <Img fluid={Blog.blogAuthorImg.childImageSharp.fluid} className="blogAuthorImage" />
                                    </Col>
                                    <Col sm={8} className="pl-0">
                                        <span>
                                            {Blog.blogAdmin}
                                        </span>
                                        <br />
                                        <span className="blog-detailpage-date">
                                            {Blog.blogDate}
                                        </span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={7} className="p-0">
                                <ul>
                                    {(Blog.blogTags.length > 0)
                                        ? Blog.blogTags.map((item, index) => {
                                            return (
                                                <li key={index} className="blog-tags">
                                                    {item}
                                                </li>
                                            )
                                        }) : <li></li>}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={8} className="blog-detailpage-content">
                        <p dangerouslySetInnerHTML={{ __html: Blog.fullDescription }} />
                    </Col>
                </Row>
                {/* Disqus */}
                <Row className="justify-content-md-center pt-2">
                    <Col md={8}>
                        <div className="article mt-5">
                            <Disqus.DiscussionEmbed shortname='Beyondbiomag' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default BlogPage
export const query = graphql`
 query getSingleBlog{
        biomagJson {
            blog {
                blogDescription {
                    id
                    blogName
                    Filter
                    blogAdmin
                    fullDescription
                    blogDate
                    blogAuthorImg{
                         childImageSharp {
                            fluid(maxWidth: 300) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    blogTags
                    path
                }
            }
        }
}
`
