
## What do first-year students find reliable in online sources?

Students need to understand how to navigate web content to find verifiable and reliable information sources. A study on how first-year students find reliable in online sources was conducted by academic reserachers at BYU and Pitt. This is the source code for the interactive Kairos journal article that was produced from this study. The authors of the article are Elise Silva, and Jessica Green. Michael Mendoza developed the interactive web experience.

## About 

What is Karios?
- [Kairos](http://kairos.technorhetoric.net/) is a refereed open-access online journal exploring the intersections of rhetoric, technology, and pedagogy.

What frameworks were used?
- Built from stratch using ReactJS, D3, and SASS

## Hosting App with Production Build

If a build directory exists make sure to make sure to serve the file located here: build/index.html using a server like the one provided in server.js

## Build Instructions 

### Development Instructions

First install required npm libraries using:

`npm install` 

This web application can be building using create-react-app or gatsby.

To run in development mode with create-react-app use:

`npm run reactstart`

To run in development mode with gatsby use:

`npm run build`


### Production Instructions

To build a production version with create-react-app use:

`npm run eactbuild`

Then you can run app on simple ndoe server with:

`nodd server.js`

And application will run on http://localhost:9000/

To build a production version with static pages with gatsby use:

`npm run build`

And application can be run with 

`npm run serve`