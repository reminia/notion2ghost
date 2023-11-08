# notion2ghost

notion2ghost is a simple cli tool that publishes notion page as Ghost CMS post.
During the process, all the images will be uploaded to cloudinary and the new links will be inserted into the parsed markdown.
So we don't need to store images locally in Ghost CMS.

## Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary.

Notion key is the integration secret for accessing the notion api.

## Usage

Install the tool by `npm install --global @reminia/notion2ghost --registry=https://npm.pkg.github.com`. Use it like below:
![sample](https://res.cloudinary.com/leecy-me/image/upload/v1689994812/open/notion2ghost-sample_puc8ld.jpg)

This project is fully guided by ChatGPT :)
