This script publishes notion page to ghost blog.

1. Set NotionKey, GhostHost, GhostKey as env variable or in the .env file. 
    They are obtained with the dotenv module.
2. Set cloudinary_cloud, cloudinary_key, cloudinary_secret as env variable or in the .env file.
    It's used for uploading image from notion to cloudinary.
    You can also remove the image transformer if u want to keep the original url from notion. 
    Notion stores the image at aws cloud.
3. Run `yarn start`, it will prompt u to input notion page id, title, slug, excerpt and tags.