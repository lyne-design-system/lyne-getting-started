const hydrate = require('lyne-test/hydrate')

module.exports = function(config) {
  config.addTransform('hydrate', async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      try {
        const results = await hydrate.renderToString(content, {
          clientHydrateAnnotations: true,
          removeScripts: false,
          removeUnusedStyles: false
        });

        return results.html;
      } catch (error) {
        return error;
      }
    }
    return content;
});

  return {
    templateFormats: ['njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: 'includes',
      output: 'dist'
    }
  };
}
