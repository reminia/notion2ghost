# notion2ghost

notion2ghost is a simple node cli tool which publishes notion page as ghost cms post.

This tool will auto upload all images to cloudinary and add the links to post markdown. Though images in notion are stored in aws by default, it's quite slow to access directly. I'm more willing to serve resources through media content providers with CDN.

# Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary. Don't forget to set `NODE_ENV` var to **production**.

# Usage

Install the tool by `npm install --global @reminia/notion2ghost --registry=https://npm.pkg.github.com`. Use it like below:
![sample](https://res.cloudinary.com/leecy-me/image/upload/v1689994812/open/notion2ghost-sample_puc8ld.jpg)

This project is fully guided by ChatGPT :)