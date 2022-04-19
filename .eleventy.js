module.exports = function (eleventyConfig) {
    // Copy `output.css` to `_site/output.css`
    eleventyConfig.addPassthroughCopy("output.css");
    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,
    };
    
    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            includes: "_includes",
            output: "_site"
        }
    };
};