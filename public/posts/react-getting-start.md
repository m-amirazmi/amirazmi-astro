---
title: "How to start a new React project?"
description: "From the initial release of React until today with React 18, there are multiple ways to start a new React project. Some prefer start with bare bone React installation with custom Webpack and some prefer all in one installation with meta frameworks like NextJS"
pubDate: "2023-11-19T05:58:44.199Z"
heroImage: "/images/blog/react-getting-start.webp"
category: "tutorial"
tags: ["react", "vite", "beginner"]
coverColor: "#FDF4FF"
author: "Muhamad Amir Azmi"
---
There are so many ways to start building a web application with React. I have been doing React since 2020 before the transition class component into functional component. 

## My Personal Experience With React
I have experience in creating React app manually using Webpack and Babel to include the React app inside the Django application. I was doing this because we do not want to host another server just for React app. So, by doing this way, I can make the React app as static HTML, CSS and Javascript and serve from Django application.

Then, I was using the Create React App, which is one of the most popular React build tools. The Create React App (CRA) really makes thing easier. It comes with Webpack and the only problem that time, the compilation and hot reload from CRA very slow. I have been using Create React App until 2022 where creating React app with Vite is the new norm and NextJS getting popular.

Basically, these are the ways I done to create a new React application:
1. Manual - Webpack + Babel
2. Create React App - CRA
3. Using NextJS
4. Vite React

Other than those, we can also create React app through Bun, Snowpack, esbuild and many more. Here I just want to share the latest and best way to start new React app depending on the application requirement.

## Creating SPA Or Server Based App?
Different build tools can build different kind of React application. Typically there are 2 different app with React which are Single Page application and server-based application like Server Side Rendering or Static Site Generation application. 

If the application do not have any server side logic, and the application will handles all things including data fetching on Client Side (through useEffect for example), we can use build React application with Vite React.

However, if the application need to fetch the data through server side and need to make the application SEO friendly, we can use NextJS build.

Let's start with building the React application with Client Side Rendering only. We build a Single Page Application first.

## Create React SPA With Vite