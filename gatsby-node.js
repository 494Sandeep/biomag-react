const path = require('path');
const trainingPage = 'src/templates/page/training.js'
const blogPage = 'src/templates/page/blog.js'
const blogPageComponent = './src/templates/post/blog.js';
const therapistPage = 'src/templates/page/therapists.js'
const termsAndPolicyPage = 'src/templates/page/terms-and-policy.js'

exports.createPages = ({ actions: { createPage }, graphql }) => {
    createPage({
        path: "/training/",
        component: path.resolve(trainingPage)
    });
    createPage({
        path: "/blog/",
        component: path.resolve(blogPage)
    });
    createPage({
        path: "/therapist/",
        component: path.resolve(therapistPage)
    });
    createPage({
        path: "/therapist/",
        component: path.resolve(therapistPage)
    });
    createPage({
        path: "/terms-and-policy/",
        component: path.resolve(termsAndPolicyPage)
    });
    return graphql(`{
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
    }`).then(res => {
        if (res.error)
            return Promise.reject(res.error)
        res.data.biomagJson.blog.blogDescription.forEach((node) => {
            createPage({
                path: `/blog/${node.path}`,
                component: path.resolve(blogPageComponent),
            })
        })
    })
}
