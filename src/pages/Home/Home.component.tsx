import React from "react";
import { BlogPost } from "../../components/blog-post/blog-post.component";
import { IBlogPost } from "../../components/blog-post/blog-post.interface";
import { Root } from "./home.styled";
import { IHome } from "./home.interface";

const blogPosts = require("json-loader!yaml-loader!../../content/blog-posts.yml");

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