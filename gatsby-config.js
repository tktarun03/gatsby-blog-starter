module.exports = {
    siteMetadata: {
        title: "Gatsby Blog Starter",
        description: "A simple Gatsby blog using Markdown.",
        author: "Arunkumar Thamilarasu"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/content/`
            }
        },
        "gatsby-transformer-remark"
    ]
};