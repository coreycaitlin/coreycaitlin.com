module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("content/img/*.{jpg,gif,png,JPG}");
    eleventyConfig.addPassthroughCopy("content/fonts");
    eleventyConfig.addPassthroughCopy({"styles/main.css": "main.css"});
    eleventyConfig.addWatchTarget("./styles/");
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("filters/");
    eleventyConfig.addNunjucksFilter('date', require('./filters/nunjucks-dayjs-filter'));

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            output: "_site"
        }
    };
};
