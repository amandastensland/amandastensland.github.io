module.exports = (dato, root) => {
  root.directory("src/content", contentDir => {
    contentDir.createDataFile( "index.yml", "yaml", dato.homePage.toMap() );
    contentDir.createDataFile( "about.yml", "yaml", dato.aboutPage.toMap() );
  });
};