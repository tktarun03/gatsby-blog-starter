import React from 'react';
import { graphql } from 'gatsby';

export default function Home({ data }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Gatsby Blog Starter</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                    excerpt
                }
            }
        }
    }
`;
