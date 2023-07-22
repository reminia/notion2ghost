# notion2ghost

notion2ghost is a simple node project publishing notion page as ghost cms post.

Images in notion page will be auto uploaded to cloudinary and included in the generated markdown. Although images in notion are stored in aws cloud by default, I don't want to use that link, it's very slow. As I'm a blogger, I'm more willing to serve all the resources through media content providers with CDN.
# Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary.

# Start

Run `yarn start` to execute the index.js script. Or execute `yarn link` first and then run `notion2ghost` command anywhere. Below is a sample:

![sample](https://res.cloudinary.com/leecy-me/image/upload/v1689994812/open/notion2ghost-sample_puc8ld.jpg)

This project is fully guided by ChatGPT :)