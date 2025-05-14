const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurnDownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurnDownService();

    const convertedHtml = marked.parse(markdownContent);
    console.log('converted html', convertedHtml)

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });
    console.log('sanitized html',sanitizedHtml)
   
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
   console.log('sanitized markdown',sanitizedMarkdown)
   
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;