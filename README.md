# notion2ghost

notion2ghost is a simple cli tool that publishes notion page as ghost CMS post.
During the process, all the images will be uploaded to cloudinary and the new links will be inserted into the parsed markdown.
So images will not be stored locally in server.

## Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary.

* Notion key is the integration secret for accessing notion api.
* Ghost host and key are to access the ghost api.
* Cloudinary settings are for uploading images to cloudinary.

## Usage

Install the tool by `npm install --global @reminia/notion2ghost --registry=https://npm.pkg.github.com`. Use it like below:
![sample](https://res.cloudinary.com/leecy-me/image/upload/v1689994812/open/notion2ghost-sample_puc8ld.jpg)

This project is fully guided by ChatGPT :)
