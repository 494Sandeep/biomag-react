const path = require('path');

exports.createPages = ({ actions: { createPage } }) => {
    const trainingPage = 'src/templates/page/training.js'
    const blogPage = 'src/templates/page/blog.js'
    const therapistPage = 'src/templates/page/therapists.js'
    const termsAndPolicyPage = 'src/templates/page/terms-and-policy.js'


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
}