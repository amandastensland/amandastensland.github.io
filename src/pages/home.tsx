import React from "react";
import styled from "styled-components";
import { IBlogPost, BlogPost } from "../components/blog-post";

const blogPosts = require("json-loader!yaml-loader!../content/blog-posts.yml");

/**
 * Types
 */
export interface IHome {
  blogPosts: IBlogPost[];
}

/**
 * Styled
 */
export const Root = styled.main`
  margin: 2rem auto;
  max-width: 50rem;
`;

/**
 * Component
 */
export class Home extends React.Component<IHome> {
  
  static defaultProps = {
    blogPosts: blogPosts
  };

  render() {
    return (
      <Root>
        {this.props.blogPosts.map( (blogPost: IBlogPost) => 
          <BlogPost {...blogPost} key={blogPost.id} /> )}
      </Root>
    );
  }
}