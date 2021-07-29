const EleventyPluginNotionCMS = require("./.eleventy.js");

test("should execute addGlobalData() with declared names", () => {
  const eleventyConfig = {
    addGlobalData: jest.fn(),
  };

  const options = {
    notionToken: "fake-token",
    pages: {
      page1Data: { id: "page-1-id" },
      page2Data: { id: "page-2-id" },
    },
    databases: {
      database1Data: {
        id: "database-1-id",
      },
      database2Data: {
        id: "database-2-id",
      },
    },
  };

  EleventyPluginNotionCMS(eleventyConfig, options);

  expect(eleventyConfig.addGlobalData).toHaveBeenCalledWith(
    "page1Data",
    expect.anything()
  );
  expect(eleventyConfig.addGlobalData).toHaveBeenCalledWith(
    "page2Data",
    expect.anything()
  );
  expect(eleventyConfig.addGlobalData).toHaveBeenCalledWith(
    "database1Data",
    expect.anything()
  );
  expect(eleventyConfig.addGlobalData).toHaveBeenCalledWith(
    "database2Data",
    expect.anything()
  );
});
