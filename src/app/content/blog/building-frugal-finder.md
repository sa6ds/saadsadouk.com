---
title: "FrugalFinder: Applying SWE Principles in University"
pubDate: "12-22-2024"
tldr: "Building FrugalFinder taught me practical lessons about software engineering – from making smart technical choices to working as a team. Here’s what I learned while creating an app that aims to help students save money on school supplies."
---

# Not Just Another Class Project

When I signed up for CS 321: Software Engineering, I thought it would be another coding-heavy class. Instead, it turned out to be a crash course in what it actually means to build software in the real world.

Throughout this class, we learned key software engineering principles such as requirements gathering, system design, testing, and version control. We applied best practices like modularization, maintaining high cohesion and low coupling, and writing clean, maintainable code. These principles weren’t just abstract concepts; they became essential as we worked through all phases of the software engineering lifecycle.

The best part? This wasn’t just a theoretical project for a grade; we were actually building something that could have a real impact.

# Why We Made FrugalFinder

![Frugal Finder Demo](/blog-assets/building-frugal-finder/frugal-finder-demo.gif)

Our team decided to tackle a problem we all knew well: the high cost of school supplies. We wanted to make it easier for students to find affordable options.

To keep our focus on real users, we created personas like Alex, a broke art student on a tight budget, and Laura, a single mom trying to get the best deals for her kids. These weren’t just names on paper; they helped us stay grounded in solving actual problems.

# The Tech Decisions That Mattered

For the stack, we chose **React** and **Tailwind** for the frontend, coupled with a **Flask** backend. The big challenge was figuring out how to gather product data efficiently without creating a maintenance nightmare.

At first, we considered scraping websites directly. But after digging into the risks (like getting blocked or dealing with constantly changing layouts), we pivoted. That’s when I suggested using the Google Shopping API through [SerpApi](https://serpapi.com/). It wasn’t free, but it saved us time and headaches in the long run.

![Frugal Finder Software Architecture](/blog-assets/building-frugal-finder/frugal-finder-arch.png)

# Learning to Work as a Team

With seven team members split between frontend and backend, coordination was key. As the frontend lead, I was responsible for guiding the team through React and TypeScript development, making sure we kept the user experience smooth and intuitive. We held bi-weekly meetings: Tuesdays for planning and Fridays for progress updates and problem-solving.

It wasn’t always smooth sailing – scheduling was tough, and we didn’t always agree on everything. But we learned how to communicate, compromise, and stay focused on the bigger picture.

# Beyond Coding: The Bigger Lessons

The biggest takeaway? Real software engineering isn’t just about writing code. It’s about:

- **Defining clear requirements** before diving in, ensuring all functional and non-functional requirements are well-documented and understood by the team.
- **Using tools that help, not hinder**, such as UML diagrams for system architecture and detailed specifications to guide development, avoiding ambiguity.
- **Maintaining high-quality code** by focusing on principles like **cohesion** and **coupling** to ensure our system components were well-structured and maintainable.
- **Collaboration** through GitHub, leveraging version control, pull requests, and continuous integration to maintain code quality and keep everyone aligned.
- **Testing** became an essential part of our process, from unit tests to integration tests, ensuring that each part of the application functioned correctly before deployment.

In a classroom, you usually work solo, and the path is laid out for you. With FrugalFinder, we had to figure everything out ourselves, which was both challenging and rewarding.

# Reflecting on the Experience

Looking back, CS 321 wasn’t just about building software – it was about becoming a software engineer. There’s a difference. Programmers write code. Engineers think about users, systems, and the people they work with.

This project showed me what it’s like to face real-world challenges: balancing ambition with practicality, making decisions as a team, and dealing with unexpected issues.
