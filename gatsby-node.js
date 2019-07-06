const axios = require('axios');

exports.createPages = async ({ actions: { createPage } }) => {
  const response = await axios.get('https://psullivan6.github.io/api/data.json');
  const data = response.data;

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.js'),
    context: { data }
  });

  // Create a page for each Pokémon.
  data.projects.forEach(project => {
    createPage({
      path: `/detail/${project.letter}/`,
      component: require.resolve('./src/templates/detail.js'),
      context: { project }
    });
  });
};