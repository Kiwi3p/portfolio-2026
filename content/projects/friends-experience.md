---
slug: friends-experience
title: The Friends Experience
shortDescription: "Building a web app that can scale to global markets."
image: /images/fnds-square-2.png
heroImage: /images/friends-img.png
videoUrl: null
liveUrl: "https://friends-staging-2021.netlify.app/"
githubUrl: null
---

The Friends Experience is an experiential event run across the country, and soon across the world. As a result it requires a robust Vue-based web app.

As a result, this web app dictates itself in an entirely dynamic way. By utilizing Netlify's headless CMS, pages and posts can be added using simple JSON data. That being said, there are very few components to this page, yet those components consist of an organized tree of ternary operations that allow the site to seamlessly build based on the JSON data. As a result, whole micro sites can be built based off of a small subset of data. The site was designed this way to allow my team to both edit the site and add new markets when need be.

## Database architecture

On top of a robust CMS, this site has a serverless AWS back-end for storing user information. Based on our emerging markets, we have functions that tie email signups based on routes, or by user choice.

Currently we have markets from around the world. In order to properly filter this information, I had to create a function that sends tags from our front end to our back end. These tags are then filtered to our three different databases. The Tradable Bits CRM takes this data in and analyzes it against other customers. The Mailchimp API inputs our data and organizes it into localized data, allowing for email automation to be triggered by this same function. Finally, I have a function that saves this information with its appropriate tag metadata to a SQL DynamoDB database as a backup.
