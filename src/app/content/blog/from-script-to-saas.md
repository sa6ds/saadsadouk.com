---
title: "From Script to SaaS: Building flipassist.app"
pubDate: "02-20-2025"
tldr: "What started as a Python script to calculate sneaker profits evolved into flipassist.app—a full-stack reselling toolkit. This post dives into the development process, from the initial idea to launch, and the lessons I learned along the way."
---

# The Backstory: A Reseller's Need

My journey with flipassist began years ago as a reseller. After buying a pair of shoes, I'd need to quickly calculate potential profits, factoring in platform fees to ensure I was making a worth while profit. calculating the fees was a pain, so I wrote a simple Python script to test what I'd learned in class. It worked well enough, and I still have it saved as a memento of where this project started.

```python
soldprice = float(input('Sold Price: $'))
firstFee = 0.124
secondFee = 5

feecycleone = firstFee * soldprice
feecycletwo = feecycleone + secondFee
youTake = soldprice - feecycletwo
print("\nAfter Fees: $", format(feecycletwo, '.2f'))
print("Congrats you made: $", format(youTake, '.2f'))
```

<span className="text-sm text-slate-500">Written September 28, 2021, at 8:51 PM—a basic fee calculator for the GOAT platform:</span>

By the spring semester of my sophomore year in college, after my internship at IPConfigure, I was back to balancing school with my reselling side hustle. I was using a lot of different apps to manage my inventory, and I was missing a centralized way to track my business. That's when the idea for flipassist took root: an all-in-one toolkit featuring a dashboard for key metrics, a structured inventory system, profit calculators for popular selling platforms like GOAT and StockX, and tools that make the reselling process easier.

# Designing the Foundation

With the core features defined, I turned to the tech stack. Having only built smaller scale web apps before, this would be my first serious project, and I wanted to make sure it was scalable.

I selected **Next.js** for the frontend—its React foundation, paired with server-side rendering, ensures strong performance and flexibility. **TypeScript** followed, providing type safety to reduce errors and enhance development clarity.

For styling, **Tailwind CSS** offered an efficient way to maintain a consistent, clean look without extensive custom code.

On the backend, **Firebase** handled database management, authentication, and storage—its cloud-based, real-time capabilities made it a reliable choice. The project was deployed on **Vercel** for optimal performance and scalability.

The design phase began shortly after. I knew that a nice UI & UX would be key to the success of the project, so I turned to **Figma** to create a design that was both functional and aesthetically pleasing. I first sketched out the layout of the app, then created a more detailed design in Figma.

![flipassist figma design](/blog-assets/from-script-to-saas/flipassist-figma-design.png)

# Beta: First Steps and Feedback

After the design was complete, I started building the app. I first built the dashboard, then the inventory management, as well as the Monitors page.

I shared this early build with reselling groups I'd joined, eager for real-world input. The response exceeded my expectations—users found it valuable, and it gained momentum quickly.

This phase was about proving the concept. The initial feedback confirmed the core idea worked, but it also highlighted areas for growth, setting the stage for what I'd need to tackle before introducing a paid version.

# Preparing for Launch: Payments and Tiers

After the beta, I started working on the paid version of the app. I added a subscription model to the app, which allows users to choose between a free and a paid tier. The free tier includes the core features of the app, while the paid tier includes additional features.

I used **Stripe** to handle payments, and I added a settings page for users to manage their subscriptions. I really liked how other software that I use like Arc have a badge system, a kind of flex to show how long you've been using the app. I added a similar system to flipassist, a way to show how long you've been using the app in an effort to establish a connection between the user and the app.

![flipassist badges preview](/blog-assets/from-script-to-saas/flipassist-badges-preview.gif)

In this time I enhanced the inventory system with CSV import/export functionality, simplifying onboarding and data backups. Multi-select options and minor UX adjustments followed, all driven by the need to refine the tool for a paid audience.

The tier structure settled as follows:

- **Free Tier:** Dashboard, profit tracking, basic metrics, calculators, reselling tools, and a limit of 15 inventory items.
- **Paid Tier:** Unlimited inventory, CSV import/export, real-time Twitter monitors, and priority support/feature requests.

This split was strategic. Insights from resources like _The SaaS Handbook_ emphasized the importance of a free tier that builds trust, paired with premium features that encourage upgrades. It's a balance that supports user adoption without overcomplicating the model.

Integrating **Stripe** required careful planning. I had to define control flows: what happens when a paid user downgrades to free with over 15 items? Should excess items be removed, or locked with older ones replaced as new ones are added? I created detailed flowcharts—covering paid-to-free and free-to-paid transitions—to ensure smooth handling. A settings page was added for users to manage subscriptions easily. These decisions were time-intensive but vital for reliability.

# Launch and Beyond

With payments resolved, I prepared the product for the official launch. I posted the app on Product Hunt, shared updates through X and Discord, and made it official. Flipassist went live at [flipassist.app](https://www.flipassist.app/). It's now operational and growing with a community of over 100 users all over the world.

What started as a simple script to calculate sneaker profits has evolved into a full-stack reselling toolkit. This journey from a basic script to a launched SaaS taught me that true software development isn't linear; it's a process of refining ideas, adapting to user needs, and building systems that last.

<br/>

Thanks for reading! If you'd like to see a more detailed look at how I built the app, the app is open source and the PR's are available on [GitHub](https://github.com/sa6ds/flipassist/pulls?q=) with pics of how the app looked at each step of the way.
