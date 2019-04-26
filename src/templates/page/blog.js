import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../../layout/layout';
import SEO from "../../components/seo";
import BlogCard from '../../components/blog-card';
import Filters from '../../components/Filters';

const Blog = ({ data }) => {
    // const blogFilterDeteils = data.biomagJson.blog.blogDetail;
    const blogDetails = data.biomagJson.blog.blogDescription;
    return (
        <Layout>
            <SEO title="Blog" />
            <div id="blog">
                <div className="container">
                    <Filters />
                    <hr />
                    <div className="row">
                        {
                            blogDetails.map((blog, index) => {
                                return (
                                    <div className="col-md-4 col-sm-12" key={index} >
                                        <BlogCard blog={blog} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query getAllBlog{
            biomagJson {
                blog {
                    blogFilter
                    blogDetail {
                        id
                        blogListName
                        blogFilter
                    }
                    blogDescription {
                        id
                        blogImg
                        blogName
                        blogFilter
                        blogAdmin
                        blogReadmore
                        shortDescription
                        blogDate
                        blogAuthorImg
                        blogTags
                        path
                    }
                }
            }
        }
`
