# notion2ghost

notion2ghost is a simple cli tool that publishes notion page as ghost cms post.

This tool will auto upload all post images to cloudinary and add cloudinary links to markdown. Images in notion page are stored in aws, but I don't want to expose aws links. I'm more willing to serve resources through a CDN which is more quick.

## Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary.

Notion key is the integration secret for accessing the notion api.

## Usage

Install the tool by `npm install --global @reminia/notion2ghost --registry=https://npm.pkg.github.com`. Use it like below:
![sample](https://res.cloudinary.com/leecy-me/image/upload/v1689994812/open/notion2ghost-sample_puc8ld.jpg)

This project is fully guided by ChatGPT :)
