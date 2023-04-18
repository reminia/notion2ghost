const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');

require('dotenv').config()
const notionKey = process.env.NotionKey
const ghostHost = process.env.GhostHost
const ghostKey = process.env.GhostKey

const prompt = require("prompt-sync")({ sigint: true });
const pageId = prompt("notion page id: ");
const title = prompt("post title: ");
const excerpt = prompt("post excerpt: ");
const tags = prompt("post tags(separated by ,): ").split(",");

const notion = new Client({
  auth: notionKey,
});
// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const GhostAdminAPI = require('@tryghost/admin-api');
const ghost = new GhostAdminAPI({
  url: ghostHost, // move to config
  key: ghostKey,
  version: 'v4'
});

const mdoc = {"version":"0.3.1","atoms":[],"cards":[["markdown", {"cardName": "markdown"}]],"markups":[],"sections": [[10, 0]]};

(async () => {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  mdoc.cards[0][1]["markdown"] = mdString;
  const json = JSON.stringify(mdoc);
  const post = {
    status: "published",
    tags: tags,
    title: title,
    mobiledoc: json,
    custom_excerpt: excerpt
  };
  ghost.posts.add(post)
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  //writing markdown to file
  fs.writeFile("post.md", mdString, (err) => {
    console.log(err);
  });
})();