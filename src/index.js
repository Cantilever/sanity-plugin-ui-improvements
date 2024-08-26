const { definePlugin } = require('sanity');
require('../styles/sanity-plugin-ui-improvements.css');

const sanityUIImprovements = definePlugin({
  name: 'sanity-plugin-ui-improvements',
});

module.exports = sanityUIImprovements;
module.exports.sanityUIImprovements = sanityUIImprovements;