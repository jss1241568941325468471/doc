const eleventyFilter = require('./src/_utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodesOld = require('./utils/eleventy-shortcodes'); // To replace
const eleventyShortcodes = require('./docs/_11ty/shortcodes');
const eleventyColections = require('./utils/eleventy-collections');
const markdown = require('./utils/markdown');
const algoliaSearch = require('algoliasearch');
const tailwind = require('tailwindcss');
const postCss = require('postcss');
const autoprefixer = require('autoprefixer');

require('dotenv').config();

module.exports = function (config) {
  config.setQuietMode(true);

  config.ignores.add("docs/_11ty");

  config.addPassthroughCopy({
    'public': '.'
  });

  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcodesOld); // To replace
  config.addPlugin(eleventyShortcodes)
  config.addPlugin(eleventyNavigationTree);
  config.addPlugin(eleventyColections);

  config.addLiquidFilter("postcss", async function (code) {
    try {
      const result = await postCss([
        tailwind(require('./tailwind.config')),
        autoprefixer()
      ])
        .process(code, {from: './src/_includes/styles/tailwind.css'});

      return result.css;
    } catch (error) {
      console.error('PostCSS filter error:', error);
      throw new Error(error);
    }
  });

  config.setLibrary('md', markdown);

  config.addJavaScriptFunction('algoliaInitIndex', async function (name, data, settings) {
    if (process.env.ALGOLIA_ADMIN_KEY && process.env.ALGOLIA_APP_ID) {
      const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

      const index = client.initIndex(name);

      if (settings) {
        index.setSettings(settings).then();
      }

      await index.clearObjects().then();

      const batchSize = 1000;
      for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        await index.saveObjects(batch, {
          autoGenerateObjectIDIfNotExist: true
        });
      }
    }
  });

  return {
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}
