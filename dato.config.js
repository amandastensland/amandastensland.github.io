module.exports = (dato, root) => {
  root.directory("src/content", dir => {
    dir.createDataFile( "index.yml", "yaml", dato.homePage.toMap() );
    dir.createDataFile( "about.yml", "yaml", dato.aboutPage.toMap() );
    dir.createDataFile( `blog-posts.yml`, "yaml", 
      dato.blogPosts.map( blogPost => blogPost.toMap() ) );
  });
};