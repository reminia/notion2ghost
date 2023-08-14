const cloudinary = require("cloudinary");
const util = require('./util.js');
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const notionKey = process.env.NOTION_KEY
const ghostHost = process.env.GHOST_HOST
const ghostKey = process.env.GHOST_KEY

const prompt = require("prompt-sync")({ sigint: true });
var pageId = prompt("notion page id: ");
pageId = util.parseUrl(pageId);
console.log("notion page id is " + pageId)

const title = prompt("post title: ");
const slug = prompt("post url slug: ");
const excerpt = prompt("post excerpt: ");
const tags = prompt("post tags(separated by ,): ").split(",");

var v2 = cloudinary.v2;
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});

const notion = new Client({
  auth: notionKey,
});
var n2m = new NotionToMarkdown({ notionClient: notion });
n2m = n2m.setCustomTransformer("image", async (block) => {
  var url = block.image.file.url;
  const uploadedImage = await v2.uploader.upload(url,
    { folder: "blog-images" }).catch(err => {
      console.log(err);
    });
  return `![${block.id}](${uploadedImage.secure_url})`;
});

const GhostAdminAPI = require('@tryghost/admin-api');
const ghost = new GhostAdminAPI({
  url: ghostHost,
  key: ghostKey,
  version: 'v4'
});

const mdoc = { "version": "0.3.1", "atoms": [], "cards": [["markdown", { "cardName": "markdown" }]], "markups": [], "sections": [[10, 0]] };

(async () => {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  if (!mdblocks.length) {
    console.warn(`Cannot find any blocks, possibly invalid pageId ${pageId}`);
    process.exit(1);
  }
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
  if (slug) {
    post.slug = slug;
  }
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
