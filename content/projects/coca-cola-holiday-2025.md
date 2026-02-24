---
slug: coca-cola-holiday-2025
title: Coca Cola Holiday 2025
shortDescription: "Second-screen sync for Fire TV and mobile — QR code sign-in and a multiplayer quiz that boosted dwell time 30%."
image: null
heroImage: null
videoUrl: null
liveUrl: null
githubUrl: null
sectionImages:
  - /images/placeholder-architecture.svg
  - null
  - /images/placeholder-outcomes.svg
  - null
---

A major team goal was getting "second screen" users more synced with their Fire TV. A large portion of viewers are on their phone at the same time, and our product designers were tasked with a system to connect phones to Fire TV — but from a technical standpoint, they didn't know where to start.

We explored prompting users to press a button on Fire TV to open the app on their phone, but hit limitations and red tape between teams. I opted for a classic: the **QR code**. The designers agreed — it was oddly less friction. A quick scan and the user was signed in.

Coca Cola approached the team to use this for a multi-million-dollar holiday campaign. The creative landed on a **multiplayer quiz**: a family on the Fire TV could play together and get a list of holiday movie recommendations based on their collective answers.

That meant building not just the QR interface but a full multiplayer system. What if too many people signed in? Too few? Once I had the proposed user flow from product, I built a detailed architecture plan.

## Architecture & backend

Communication between devices had to be instantaneous, so we needed **WebSockets**. Could we use something like Socket.io? No — internal security required building the utility in-house.

After getting up to speed on **AWS CDK** and internal security, I built a WebSocket package from scratch. I then put together a diagram of how everything flows: two React front ends (mobile and Fire TV) and the WebSocket layer in between.

We initially planned to store quiz and user data in **DynamoDB**. That turned out to be both a security concern (storing user data) and unnecessarily expensive. The architecture made it clear the Fire TV could hold all quiz and participant state in the front end, with the WebSocket passing that state back and forth. So we kept state off the database.

## Quiz logic & results

A core question: what happens to quiz results as more or fewer users participate? In user testing, we saw that more users often led to the same result. We hard-coded batch movie lists so users weren’t suggested lesser films and always got a solid recommendation — a creative choice that also pushed similar answers together.

How often were results repeating? I wrote a script to run thousands of **Monte Carlo** tests and found that more than half the time users were getting one outcome. That led to rethinking the results algorithm and introducing **soft max–style sorting** with tie-breaker probability, so users got more unique answers that still matched their group’s input.

## Outcomes

We benchmarked on **dwell time** — a known issue for Fire TV is short sessions because users leave for better mobile experiences. By the end of the campaign, dwell time had **improved 30%**. Having both a second-screen connection and a more interactive experience kept people in the app longer.

## What’s next

The quiz was engaging but simple. More can be done with the real-time link between screens, and the probability mechanism took longer to build than expected. I’m now exploring reusing this stack for richer experiences: a **collaborative synthesizer** music maker and a **3D racing game**.
