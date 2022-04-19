module.exports = function (eleventyConfig) {
    // Copy `main.css` to `_site/main.css`
    // eleventyConfig.addPassthroughCopy("styles/main.css");
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("styles/main.css");
    return {
        // When a passthrough file is modified, rebuild the pages:
        // passthroughFileCopy: true,
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