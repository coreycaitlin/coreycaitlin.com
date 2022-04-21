module.exports = function (eleventyConfig) {
    // Pass through images
    eleventyConfig.addPassthroughCopy("content/img/*.{jpg,gif,png}");
    // Ignore README, CSS (PostCSS will do it), filters)
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("styles/main.css");
    eleventyConfig.ignores.add("filters/");
    // Watch styles folder
    eleventyConfig.addWatchTarget("./styles/");
    // Use Day.js filter for better date formatting
    eleventyConfig.addNunjucksFilter('date', require('./filters/nunjucks-dayjs-filter'));
    return {
        "dataTemplateEngine": "njk",
        passthroughFileCopy: true
    };
    
    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "content",
            includes: "_includes",
            output: "_site"
        }
    };
};