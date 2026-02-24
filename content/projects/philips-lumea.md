---
slug: philips-lumea
title: Philips Lumea
shortDescription: "Product detail page with a dialog-tree chatbot and 3D product experience. A/B testing drove a 45% increase in dwell time and more add-to-cart."
image: /images/uploads/lumea-1.png
heroImage: /images/uploads/lumea-1.png
videoUrl: null
liveUrl: "https://www.amazon.com/stores/page/9AC70574-55E8-4645-AB61-17BAC8130879"
githubUrl: null
sectionImages:
  - null
  - /images/uploads/lumea-3.png
sectionRightImages:
  - /images/uploads/lumea-2.png
  - null
---

On the surface, this appears to be a typical product detail page — just with better styling. Under the surface, it’s much more complex.

Product designers came to me about feasibility for an **AI chatbot**. We’d built one before, but here the client wanted a walkthrough of the user manual in an on-rails chat experience. To save on Bedrock costs, I worked with the copywriter to build a **dialog tree system** instead. That let us put more focus on the smooth animations the chat screen uses with **Framer Motion**.

Further asks: use **3D models** provided by the client and add a rendered area where the user can interact with the device. We added **3D hotspots** on top for informational content.

Where the site got interesting was when it **performed poorly**. Despite being more complex technically than a typical Amazon PDP, the device was expensive and we were seeing low dwell time and low add-to-cart rates.

I connected with our data analytics team to see what we could use for this kind of site. For a project like this, **A/B testing had never been done**. With the product designer, we defined the best flow to re-orient the experience and set up a **50/50 test** on the live site.

## Chatbot & 3D experience

The chatbot is a dialog tree, not a live AI call — so we avoid Bedrock cost while still delivering a guided manual walkthrough. The chat UI is animated with Framer Motion for a smooth, on-rails feel. The 3D experience uses client-provided models in an interactive viewer, with hotspots layered on the device for key information.

## A/B testing & outcomes

At the end of the month, our gut instincts paid off. The new variation saw a **45% increase in dwell time** and significantly more add-to-cart events. Running a proper A/B test on this kind of PDP proved the value of re-orienting the flow and gave us clear data to iterate on.
