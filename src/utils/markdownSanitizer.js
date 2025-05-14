const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurnDownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurnDownService();

    const convertedHtml = marked.parse(markdownContent);

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });
   
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
   
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;