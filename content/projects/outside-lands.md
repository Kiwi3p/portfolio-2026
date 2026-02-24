---
slug: outside-lands
title: Outside Lands Music Festival
shortDescription: "Building a web app that can scale to global markets."
image: /images/OSL-square.png
heroImage: /images/OSL-wide.png
videoUrl: null
liveUrl: "http://2021.sfoutsidelands.com"
githubUrl: null
---

After going through a site redesign a year prior, Superfly tasked me to modify this Vue-based app for the 2021 Outside Lands music festival in San Francisco.

The site had had a major overhaul when I was handed it, but the actual framework was done in an old version of Vue and Ruby. As a result it was difficult for new engineers to boot up and extremely slow to edit.

Despite these limitations, I was able to modify the site's headless CMS to make editing without diving into Vue a little easier. This made copy changes quicker and less likely to crash the site. Further, I implemented a custom API for restaurants, breweries, and wineries that were being showcased at the festival. Using some complex JavaScript functions, I was able to make an application that served users with a randomized selection of restaurants, bars, and wineries upon visiting their respective pages.

Further the back-end architecture of the site challenged me to capture emails, zip codes, and phone numbers of hundreds of thousands of fans.

Despite having a schedule that made it almost required to make these edits live as announcements and shows were happening, I delivered without issue to the festival. This was especially evident when some artists dropped off the lineup and required me to make drastic changes to the site in real time, thus proving the efficiency of my code writing on site.

## Database architecture

On top of a robust CMS, this site has a serverless AWS back-end for storing user information.

I had to create a function that sends "tags" from our front end to our back end. These tags are then filtered to our three different databases. The Tradable Bits CRM takes this data in and analyzes it against other customers. The Mailchimp API inputs our data and organizes it into localized data, allowing for email automation to be triggered by this same function. Finally, I have a function that saves this information with its appropriate tag metadata to a SQL DynamoDB database as a backup.

What was unique about this data structure is that instead of just capturing email data, I also had to capture zip code and phone number information to trigger text message automations.
