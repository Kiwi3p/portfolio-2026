---
slug: office-experience
title: The Office Experience
shortDescription: "Converting a Vue-based workplace to React."
image: /images/office-square-v3.png
heroImage: /images/office-img.png
videoUrl: null
liveUrl: "https://www.theofficeexperience.com/"
githubUrl: null
---

The Office Experience is an experiential event run across the country. As a result it requires a robust Next.js–based web app.

One of the key problems I was tasked to solve in coming into this project was to build a web app based entirely on React architecture. Previously Superfly had only built apps in Vue, but expressed they wanted to explore React and Next.js in particular. This was due to its popularity, meaning a project could potentially be built faster due to a larger amount of documentation being available on the internet.

Tasked with a short deadline, and feedback from both UX designers and the client, we eventually successfully launched a site that bent what I had previously thought I could create with CSS and JavaScript.

## Database architecture

On top of a robust CMS, this site has a serverless AWS back-end for storing user information.

I had to create a function that sends "tags" from our front end to our back end. These tags are then filtered to our three different databases. The Tradable Bits CRM takes this data in and analyzes it against other customers. The Mailchimp API inputs our data and organizes it into localized data, allowing for email automation to be triggered by this same function. Finally, I have a function that saves this information with its appropriate tag metadata to a SQL DynamoDB database as a backup.
