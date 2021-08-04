const NotionCMS = require("notion-cms");
const debug = require("debug")("EleventyPluginNotionCMS");

module.exports = function (eleventyConfig, options = {}) {
  const cms = new NotionCMS(options.notionToken, options.mentionResolver);

  if (options.pages) {
    for (let dataName in options.pages) {
      debug(`adding global data ${dataName}`);
      // XXX: callback gets called several times during one Eleventy build
      eleventyConfig.addGlobalData(dataName, async () => {
        debug(`resolving global data ${dataName}`);
        return cms.getContentOfPage(options.pages[dataName].id);
      });
      debug(`added global data ${dataName}`);
    }
  }

  if (options.databases) {
    for (let dataName in options.databases) {
      debug(`adding global data ${dataName}`);
      // XXX: callback gets called several times during one Eleventy build
      eleventyConfig.addGlobalData(dataName, async () => {
        debug(`resolving global data ${dataName}`);
        return cms.getContentOfDatabase(
          options.databases[dataName].id,
          options.databases[dataName].filter
        );
      });
      debug(`added global data ${dataName}`);
    }
  }
};
