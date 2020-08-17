
## What do first-year students find reliable in online sources?

Students need to understand how to navigate web content to find verifiable and reliable information sources. A study on how first-year students find reliable in online sources was conducted by academic reserachers at BYU and Pitt. This is the source code for the interactive Kairos journal article that was produced from this study. The authors of the article are Elise Silva, and Jessica Green. Michael Mendoza developed the interactive web experience.

## About 

What is Karios?
- [Kairos](http://kairos.technorhetoric.net/) is a refereed open-access online journal exploring the intersections of rhetoric, technology, and pedagogy.

What frameworks were used?
- Built from stratch using ReactJS, D3, and SASS
- Static Page generation supported using Gatbsby for production 
- Supports Create-React-App for development and production

## Hosting App with Production Build

Static Page Production Build:
If static page generation is used for production build then the application can be served starting from: public/index.html using a server like the one provided in server-public.js

Dynamic Page Production Build
If create-react-app was used for production build then the application can be served starting from: build/index.html using a server like the one provided in server-build.js

## SourceCode File Structure

The source code is organized by 

- build : Contains files for dynamic production build created by create-react-app
- public : Contains files for static page production build created by gatsby
- src : Contains source code files necessary to run and build app
- src/components : Contains all react javascript components
- src/context : Contains context files for app state mangement
- src/data : Contains data files for app
- src/images : Contains media and images
- src/pages : Contains react components that represent site pages
- src/styles : Contains all stylesheet written in scss 

## Build Instructions 

### Development Instructions

First install required npm libraries using:

`npm install` 

This web application can be building using create-react-app or gatsby.

To run in development mode with create-react-app use:

`npm run reactstart`

To run in development mode with gatsby use:

`npm run gatsbydevelop`


### Production Instructions

To build a production version with create-react-app use:

`npm run reactbuild`

Then you can run app on simple node server with:

`node server-build.js`

And application will run on http://localhost:9000/

To build a production version with static pages with gatsby use:

`npm run gatsbybuild`

And application can be run with 

`npm run serve` or `node server-public.js`