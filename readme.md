# notion2ghost

notion2ghost is a simple node project publishing notion page as ghost cms post.

Images in notion page will be auto uploaded to cloudinary and included in the generated markdown.   
Although images in notion are stored in aws cloud by default, it's much slow.  
I'm more willing to serve resources through media content providers with CDN as a blogger.
# Setup

Refer to the .sample.env file to set up env variables for notion, ghost and cloudinary.

# Start

Run `yarn start` to execute the index.js script. Or execute `yarn link` first and then run `notion2ghost` command anywhere. Below is a sample:

![sample](https://asset.cloudinary.com/leecy-me/c9689949b15bb0320ddc003e20c8a78b)

This project is fully guided by ChatGPT :)